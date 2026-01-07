# Nuxt.js with Express

> A demonstration of running Nuxt.js in parallel with Express.js on a single port, enabling custom API endpoints alongside server-side rendering.

📝 **Blog Post**: [Running NUXT in parallel with Express](https://medium.com/@johnryancottam/running-nuxt-in-parallel-with-express-ffbd1feef83c)

## Overview

This project demonstrates how to integrate Nuxt.js with Express.js, allowing you to:

- **Custom API Routes**: Create Express API endpoints (e.g., `/api/next-movie`)
- **Server-Side Rendering**: Leverage Nuxt.js SSR capabilities
- **Single Port**: Run both Express and Nuxt on the same port (3000)
- **Hot Module Replacement**: Development with instant updates

## Features

### Express API Endpoints
- `/api/next-movie` - Returns movie information from OMDB API
- Cycles through a curated list of classic films
- RESTful API architecture ready for expansion

### Nuxt.js Frontend
- Vue.js-based UI with SSR support
- Axios integration for API calls
- Hot reload in development mode
- Static generation support

## Tech Stack

- **Nuxt.js** `^2.18.1` - Vue.js framework with SSR
- **Express.js** `^4.21.2` - Web application framework
- **Axios** `^5.13.6` - HTTP client
- **Nodemon** `^3.1.9` - Development auto-reload

## Build Setup

```bash
# install dependencies
$ npm install
# or
$ yarn install

# serve with hot reload at localhost:3000
$ npm run dev
# or
$ yarn dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Development

The development server runs with:
- **Nuxt.js** for the frontend with HMR
- **Express.js** for custom API endpoints
- **Nodemon** watching server files for changes

Access the application at: `http://localhost:3000`

## Project Structure

```
nuxt-with-express/
├── server/
│   └── index.js          # Express server with Nuxt middleware
├── pages/
│   └── index.vue         # Main page with movie display
├── nuxt.config.js        # Nuxt configuration
└── package.json          # Dependencies and scripts
```

## How It Works

1. Express server initializes and creates custom API routes
2. Nuxt.js is initialized as middleware within Express
3. Express handles API requests to `/api/*` endpoints
4. All other routes are passed to Nuxt.js for rendering
5. Both systems run on a single port (default: 3000)

## API Example

```javascript
// GET /api/next-movie
{
  "Title": "Guardians of the Galaxy",
  "Year": "2014",
  "Poster": "https://...",
  // ... more movie data
}
```

## Recent Updates

This project has been updated with the latest compatible dependencies (January 2026):
- Security patches for Express and other core dependencies
- Updated development tools (nodemon, ESLint, Prettier)
- Maintained Nuxt 2.x for stability (Nuxt 3 would require significant rewrites)

See [DEPENDENCY_UPDATES.md](../DEPENDENCY_UPDATES.md) for detailed changelog.

## Resources

- [Nuxt.js Documentation](https://nuxtjs.org)
- [Express.js Documentation](https://expressjs.com)
- [Original Blog Post](https://medium.com/@johnryancottam/running-nuxt-in-parallel-with-express-ffbd1feef83c)

## License

ISC
