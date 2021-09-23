import LoginPage from "../pages/loginpage"
class LoginFunc extends LoginPage {
    visit(){
      cy.visit("https://dev-app.procure-c.net/signin")
    }
    fillEmail(value){
      this.email().clear()
      this.email().type(value)
      this.email().should('have.value', value)
      
      return this
    }
    fillPass(value) {
      this.password().clear()
      this.password().type(value)
      this.password().should('have.value', value)
      return this 
      
    }
    Login() {
      this.login().click()
      return this
    }
    }
    export default LoginFunc