describe('Verify Browser Stack Home Page', () => {

      it('Verify Browserstack logo is visible', () => {
  
          cy.visit('https://www.browserstack.com/');
  
          cy.get('#logo').should('be.visible');
  
      })
  
      it('Click on Sign In', () => {
  
          cy.get('#primary-menu > li.sign-in-link.hide-xs.hide-sm > a').then(($selectedElement) => {
  
              debugger;
  
              $selectedElement.get(0).click()
  
          })
  
      })
  
  })