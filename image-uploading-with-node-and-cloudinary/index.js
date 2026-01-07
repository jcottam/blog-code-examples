const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// ===========================
// Configuration
// ===========================

const app = express();
const PORT = process.env.PORT || 3000;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer configuration for local file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log("File received:", file.originalname);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// ===========================
// Routes
// ===========================

/**
 * Health check endpoint
 * Returns basic information about the service
 */
app.get("/", (req, res) => {
  res.json({
    name: "Image Upload Service",
    description:
      "A Node.js service for uploading images to Cloudinary via Express and Multer",
    version: "1.0.0",
    endpoints: {
      health: "GET /",
      upload: "POST /upload",
    },
    status: "healthy",
  });
});

/**
 * Image upload endpoint
 * Accepts multipart/form-data with an image file
 * Uploads to local storage first, then to Cloudinary, then removes local copy
 */
app.post("/upload", (req, res) => {
  const uploadMiddleware = upload.single("name-of-input-key");

  uploadMiddleware(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res
        .status(400)
        .json({ error: "File upload failed", details: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    console.log("File uploaded to server:", req.file.filename);

    // Upload to Cloudinary
    const filePath = req.file.path;
    const uniqueFilename = new Date().toISOString();

    cloudinary.uploader.upload(
      filePath,
      {
        public_id: `blog/${uniqueFilename}`,
        tags: "blog",
        folder: "blog",
      },
      (err, image) => {
        if (err) {
          console.error("Cloudinary upload error:", err);
          // Clean up local file even on error
          fs.unlinkSync(filePath);
          return res
            .status(500)
            .json({ error: "Cloudinary upload failed", details: err.message });
        }

        console.log("File uploaded to Cloudinary:", image.public_id);

        // Remove local file after successful Cloudinary upload
        try {
          fs.unlinkSync(filePath);
          console.log("Local file removed:", filePath);
        } catch (fsErr) {
          console.error("Error removing local file:", fsErr);
        }

        // Return Cloudinary response
        res.json({
          message: "Image uploaded successfully",
          image: {
            url: image.secure_url,
            publicId: image.public_id,
            format: image.format,
            width: image.width,
            height: image.height,
            bytes: image.bytes,
            createdAt: image.created_at,
          },
        });
      }
    );
  });
});

// ===========================
// Server
// ===========================

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/`);
  console.log(`Upload endpoint available at: http://localhost:${PORT}/upload`);
});
