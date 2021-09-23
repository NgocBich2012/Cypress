describe('Verify Browser Stack Home Page', () => {

        it('Verify Browserstack logo is visible', () => {
    
            cy.visit('https://www.browserstack.com/');
    
            cy.get("a[title='Sign In']").first().debug().click()
    
        })
    
    })