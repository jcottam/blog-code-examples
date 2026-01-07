# Image Uploading with Node.js and Cloudinary

A lightweight Node.js service for uploading images to Cloudinary using Express and Multer. This project demonstrates how to handle file uploads through a REST API, temporarily store files locally, and then upload them to Cloudinary cloud storage.

## 📖 Blog Post

Read the detailed tutorial: [Image Uploading with Node & Cloudinary](https://medium.com/@johnryancottam/image-uploading-with-node-cloudinary-6f7796c8277a)

## 🚀 Features

- Express.js REST API server
- File upload handling with Multer
- Integration with Cloudinary for cloud storage
- Automatic cleanup of local temporary files
- Health check endpoint
- Comprehensive error handling

## 📋 Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- A [Cloudinary account](https://cloudinary.com/) (free tier available)

## 🔧 Installation

1. Clone the repository and navigate to the project directory:

```bash
cd image-uploading-with-node-and-cloudinary
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root (see Environment Variables section below)

4. Ensure the `uploads/` directory exists:

```bash
mkdir -p uploads
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Server Configuration (optional)
PORT=3000
```

### Getting Your Cloudinary Credentials

1. Sign up for a free account at [cloudinary.com](https://cloudinary.com/)
2. Go to your Dashboard
3. Find your credentials:
   - **Cloud Name**: Displayed at the top of the dashboard
   - **API Key**: Found in the "Account Details" section
   - **API Secret**: Click "Show" next to the API Secret field

## 🏃 Running the Application

### Development Mode (with auto-restart)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:3000` (or your specified PORT).

## 📡 API Endpoints

### Health Check

**GET** `/`

Returns information about the service and its status.

**Response:**

```json
{
  "name": "Image Upload Service",
  "description": "A Node.js service for uploading images to Cloudinary via Express and Multer",
  "version": "1.0.0",
  "endpoints": {
    "health": "GET /",
    "upload": "POST /upload"
  },
  "status": "healthy"
}
```

### Upload Image

**POST** `/upload`

Upload an image file to Cloudinary.

**Request:**

- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: Form data with a field named `name-of-input-key` containing the image file

**Example using cURL:**

```bash
curl -X POST http://localhost:3000/upload \
  -F "name-of-input-key=@/path/to/your/image.jpg"
```

**Example using JavaScript Fetch:**

```javascript
const formData = new FormData();
formData.append("name-of-input-key", fileInput.files[0]);

fetch("http://localhost:3000/upload", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

**Success Response (200):**

```json
{
  "message": "Image uploaded successfully",
  "image": {
    "url": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/blog/2026-01-07T12:00:00.000Z.jpg",
    "publicId": "blog/2026-01-07T12:00:00.000Z",
    "format": "jpg",
    "width": 1920,
    "height": 1080,
    "bytes": 245678,
    "createdAt": "2026-01-07T12:00:00Z"
  }
}
```

**Error Response (400/500):**

```json
{
  "error": "Error description",
  "details": "Detailed error message"
}
```

## 📁 Project Structure

```
image-uploading-with-node-and-cloudinary/
├── index.js          # Main Express server file
├── package.json      # Project dependencies and scripts
├── README.md         # This file
├── .env             # Environment variables (not in git)
└── uploads/         # Temporary storage for uploaded files
```

## 🛠️ Tech Stack

- **Express**: Web framework for Node.js
- **Multer**: Middleware for handling multipart/form-data
- **Cloudinary**: Cloud-based image and video management service

## 📝 Notes

- Uploaded files are temporarily stored in the `uploads/` directory
- Files are automatically deleted from local storage after successful Cloudinary upload
- The `uploads/` directory should be added to `.gitignore` to avoid committing temporary files
- Images are uploaded to the `blog/` folder in your Cloudinary account with the `blog` tag

## 🤝 Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements!

## 📄 License

ISC

## 👤 Author

John Ryan Cottam
