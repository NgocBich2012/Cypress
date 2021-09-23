describe('Login HVIT', () => {
    it('Verify screen login is visible', () => {
        cy.visit('https://insight.hvitclan.vn/')
          .get('#accordion > div > button').click();
    }
    )
    it('Fill email and password', () => {
        cy.get('#Input_Email').click().type('nguyenngocbich20122015@gmail.com')
          //.should('have.value', 'nguyenngocbich20122015@gmail.com')
          .should('include.value', 'nguyenngocbich20122015@gmail.com')

    }
    )
}
)