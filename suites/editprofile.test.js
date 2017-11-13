
var homePage = require('../pageobjects/homepage/home.page.js');
var loginPage = require('../pageobjects/loginPage/login.page.js');
var since = require('jasmine2-custom-message');
var editProfile = require('../pageobjects/profile/editprofile.page.js')


describe("Should edit profile", function () {


    beforeAll(function () {
        homePage.get();
        loginPage.loginWithSuccess('u1');
        homePage.waitPageLoad();
        editProfile.getEditProfile();
    });



    it("should edit profile", function () {

        editProfile.modifyNameField("123");
        editProfile.modifyGenderField("m");


    });


});