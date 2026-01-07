# Cypress E2E Testing with React

A React application configured with Cypress for end-to-end testing.

## 📚 Blog Post

Original blog post located [here](https://medium.com/p/b4c8bbf1f71c)

## 🚀 Quick Start

### Prerequisites

- Node.js installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Running the Application

Start the React development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🧪 Testing with Cypress

### Run Cypress Tests

**Option 1: Interactive Mode (Recommended for development)**

1. Start your React app in one terminal:

   ```bash
   npm start
   ```

2. In another terminal, open Cypress:

   ```bash
   npm run cypress:open
   ```

3. Select "E2E Testing" in the Cypress UI
4. Choose a browser and click on a test file to run it

**Option 2: Headless Mode (For CI/CD)**

```bash
npm run cypress:run
```

_Note: Make sure your React app is running at http://localhost:3000 before running tests_

## 📁 Project Structure

```
cypress-io-react/
├── cypress/
│   ├── e2e/              # E2E test files
│   │   └── app.cy.js     # Sample test
│   ├── fixtures/         # Test data
│   └── support/          # Custom commands and setup
│       ├── commands.js   # Custom Cypress commands
│       └── e2e.js        # E2E test configuration
├── src/                  # React source code
├── public/              # Static assets
├── cypress.config.js    # Cypress configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Configuration

### Cypress Configuration

- **Base URL**: `http://localhost:3000`
- **Test Type**: E2E (End-to-End)
- **Config File**: `cypress.config.js`

### Key Dependencies

- **React**: ^18.3.1
- **React Scripts**: 5.0.1
- **Cypress**: ^15.8.2
- **webpack-dev-server**: ^5.0.0 (required for Cypress compatibility)

## ✍️ Writing Tests

Create new test files in the `cypress/e2e/` directory with the `.cy.js` extension:

```javascript
describe("My Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should test something", () => {
    cy.get("selector").should("be.visible");
  });
});
```

## 📝 Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm run cypress:open` - Open Cypress interactive mode
- `npm run cypress:run` - Run Cypress tests in headless mode

## 🔧 Troubleshooting

### Cypress can't connect to localhost:3000

Make sure your React app is running with `npm start` before launching Cypress.

### Port already in use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 npm start
```

Then update the `baseUrl` in `cypress.config.js` accordingly.

## 📖 Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [React Testing Guide](https://reactjs.org/docs/testing.html)

## 🤝 Contributing

Feel free to open issues or submit pull requests for improvements.

## 📄 License

This project is part of a blog code examples repository.
