describe('Verify Browser Stack Home Page', () => {

        it('Verify Browserstack logo is visible', () => {
    
            cy.visit('https://www.browserstack.com/');
    
            cy.get('#logo').should('be.visible');
    
        })
    
        it('Click on Product Menu', () => {
    
            cy.get('#product-menu-toggle1').click();
    
        })
    
    })