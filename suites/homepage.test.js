
var homePage = require('../pageobjects/homepage/home.page.js');
var loginPage = require('../pageobjects/loginPage/login.page.js');
var since = require('jasmine2-custom-message');

describe("display username by post nr", function () {





    beforeAll(function () {
        homePage.get();
        loginPage.loginWithSuccess('u1');
        homePage.waitPageLoad();
    });



    it("should get the number of likes for user u1", function () {
     
      //expect(homePage.getCommentsbyUsername2('tet')).toBe('');
      //  homePage.getPostByUsername('testt');
       expect(homePage.getLikesFromPosts('u1')).toBe('3');
         });


         it("should get the number of likes for user u1 w", function () {
          //expect(homePage.getCommentsbyUsername2('tet')).toBe('');
          //  homePage.getPostByUsername('testt');
           expect(homePage.getLikesFromPosts('u1')).toBe('4');
             });
    
});