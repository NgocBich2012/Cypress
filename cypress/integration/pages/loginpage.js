class Login_Page {

    email(){
    return cy.get("#input-25")
   }

   password(){
    return cy.get("#input-30")
   }

   login() {
    return cy.get(".v-btn__content")
   }
   
   }
   export default Login_Page