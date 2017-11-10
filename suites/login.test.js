
 var loginPage = require('../pageobjects/loginPage/login.page.js');

describe("Should login", function(){
   
    
    beforeAll(function () {
        loginPage.get();
    
    });



it("login should login", function(){
  loginPage.loginWithSuccess();
})

});