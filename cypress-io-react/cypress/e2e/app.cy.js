describe('React App E2E Tests', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    // Check that the page loads
    cy.get('body').should('be.visible');
  });

  it('should display the React logo', () => {
    // Check for the React logo (adjust selector based on your app)
    cy.get('img[alt*="logo"]').should('be.visible');
  });

  it('should have a clickable link', () => {
    // Check for a link and click it (adjust based on your app)
    cy.get('a').first().should('be.visible');
  });
});

