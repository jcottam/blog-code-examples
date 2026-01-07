# Blog Code Examples

This repository contains practical, working code examples referenced in my blog posts at [https://medium.com/@johnryancottam](https://medium.com/@johnryancottam). Each project demonstrates real-world implementations of popular web development technologies and patterns.

## 📚 Projects

### 1. Cypress with React

**Location:** [`cypress-io-react/`](./cypress-io-react)  
**Blog Post:** [Testing React Applications with Cypress](https://medium.com/p/b4c8bbf1f71c)  
**Tech Stack:** React 18, Cypress, Axios

A demonstration of end-to-end testing in React applications using Cypress. This project showcases how to set up Cypress testing in a modern React application with practical test examples.

**Quick Start:**

```bash
cd cypress-io-react
npm install
npm start              # Run the React app
npm run cypress:open   # Open Cypress test runner
```

### 2. Image Uploading with Node & Cloudinary

**Location:** [`image-uploading-with-node-and-cloudinary/`](./image-uploading-with-node-and-cloudinary)  
**Blog Post:** [Image Uploading with Node & Cloudinary](https://medium.com/@johnryancottam/image-uploading-with-node-cloudinary-6f7796c8277a)  
**Tech Stack:** Node.js, Express, Multer, Cloudinary

A complete implementation of image upload functionality using Node.js/Express and Cloudinary cloud storage. Demonstrates file handling with Multer and integration with Cloudinary's API.

**Quick Start:**

```bash
cd image-uploading-with-node-and-cloudinary
npm install
npm run dev  # Run with nodemon for auto-reload
```

### 3. Nuxt with Express

**Location:** [`nuxt-with-express/`](./nuxt-with-express)  
**Blog Post:** [Running Nuxt in Parallel with Express](https://medium.com/@johnryancottam/running-nuxt-in-parallel-with-express-ffbd1feef83c)  
**Tech Stack:** Nuxt.js 2, Express, Vue.js

Learn how to run Nuxt.js alongside a custom Express server, allowing you to add custom server-side logic while maintaining Nuxt's powerful features. Perfect for applications that need custom API endpoints or middleware.

**Quick Start:**

```bash
cd nuxt-with-express
npm install  # or yarn install
npm run dev  # Starts both Nuxt and Express in development mode
```

## 🚀 Getting Started

### Prerequisites

Before running any of the projects, ensure you have:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

For specific projects, you may also need:

- **Cloudinary account** (for image-uploading-with-node-and-cloudinary)
- Modern web browser (for Cypress testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blog-code-examples.git
   cd blog-code-examples
   ```

2. Navigate to any project directory and install dependencies:

   ```bash
   cd <project-directory>
   npm install
   ```

3. Follow the project-specific README for additional setup (if available)

## 📦 Recent Updates

All projects were recently updated (January 2026) with major dependency upgrades for security and performance. Key updates include:

- **React 18** with new concurrent features
- **Cloudinary v2** API with improved functionality
- **Latest Express** versions with security patches
- **Modern ESLint & Prettier** configurations

See [DEPENDENCY_UPDATES.md](./DEPENDENCY_UPDATES.md) for detailed information about the updates.

## 🤝 Contributing

Contributions are welcome! If you find bugs, have suggestions, or want to improve the examples:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

These code examples are provided for educational purposes. Feel free to use them in your own projects.

## 📧 Contact

- **Blog:** [https://medium.com/@johnryancottam](https://medium.com/@johnryancottam)
- **Issues:** [GitHub Issues](https://github.com/yourusername/blog-code-examples/issues)

---

Happy coding! 🎉
