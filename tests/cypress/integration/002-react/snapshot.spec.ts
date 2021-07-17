describe('React App', () => {
    it('All Components"', () => {
        cy.visit('http://localhost:3000/');
        cy.matchImageSnapshot();
        
    });
});