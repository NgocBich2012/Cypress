describe('Verify Browser Stack Home Page', () => {

        it('Verify Browserstack logo is visible', () => {
    
            cy.visit('https://www.browserstack.com/').pause();
    
            cy.get("a[title='Sign In']").first().click()
    
        })
    
    })