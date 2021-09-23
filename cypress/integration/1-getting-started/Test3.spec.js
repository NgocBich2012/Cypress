describe('Verify Browser Stack Home Page', () => {

        it('Verify Browserstack logo is visible', () => {
    
            cy.visit('https://www.browserstack.com/');
    
            cy.get('#logo').should('be.visible');
    
            cy.log("Navigated to home page")
    
        })
})