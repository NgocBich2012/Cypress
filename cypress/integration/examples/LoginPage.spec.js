import LoginFunc from '../functions/login_func'
describe("Homepage", function () {
  it("Testcase1: Address & Password not input", () => {
    const lf=new LoginFunc()
    lf.visit()
    cy.pause()
    lf.Login()
    
    cy.get('.signin-box__err').contains('メールアドレスもしくはパスワードが違います。')
    cy.xpath('//div[text()="メールアドレスは必須項目です"]')
      .should('not.exist')
    cy.xpath('//div[text()="パスワードは必須項目です"]')
      .should('not.exist')

  })

  it("Testcase2: Address & Password input space", () => {
    const lf=new LoginFunc()
    lf.visit()
    cy.pause()
    lf.fillEmail(" ")
    lf.fillPass(" ")
    lf.Login()
    
    cy.get('.signin-box__err').contains('メールアドレスもしくはパスワードが違います。')
    cy.xpath('//div[text()="メールアドレスは必須項目です"]').should('be.visible')
    cy.xpath('//div[text()="パスワードは必須項目です"]').should('be.visible')
  })

  it("Testcase3: Address input value valid & Password input space", () => {
      const lf=new LoginFunc()
      lf.visit()
      cy.pause()
      lf.fillEmail("cs__creoapl_p1_stg@b-eee.com")
      lf.fillPass(" ")
      lf.Login()
      cy.get('.signin-box__err').contains('メールアドレスもしくはパスワードが違います。')
      cy.xpath('//div[text()="パスワードは必須項目です"]').should('be.visible')

  })

  it("Testcase4: Address input space & Password input value valid", () => {
    const lf=new LoginFunc()
    lf.visit()
    cy.pause()
    lf.fillEmail(" ")
    lf.fillPass("creoapl_admin_stg_common_2021")
    lf.Login()
    cy.get('.signin-box__err').contains('メールアドレスもしくはパスワードが違います。')
    cy.xpath('//div[text()="メールアドレスは必須項目です"]').should('be.visible')

})

  it("Testcase9: Login successfully", () => {
    const lf=new LoginFunc()
    lf.visit()
    cy.pause()
    lf.fillEmail("cs__creoapl_admin_stg@b-eee.com")
    lf.fillPass("creoapl_admin_stg_2021")
    lf.Login()
    cy.url().should('eq', 'https://dev-app.procure-c.net/') 

})
  
})