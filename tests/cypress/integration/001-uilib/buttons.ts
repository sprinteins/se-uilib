describe('UI-Lib', () => {
    it('All Buttons"', () => {
        cy.visit('http://localhost:6006/iframe.html?id=components-button--desktop&args=&viewMode=story');
        cy.matchImageSnapshot();
    });
});