describe('snapshopts', () => {
    it('react"', () => {
        cy.visit('http://localhost:3000/');
        cy.matchImageSnapshot();
    });
    
    
    it('html"', () => {
        cy.visit('http://localhost:8080/');
        cy.matchImageSnapshot();
    });
    
    it('angular"', () => {
        cy.visit('http://localhost:4100/');
        cy.matchImageSnapshot();
    });
});