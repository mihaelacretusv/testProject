
var homePage = require('../pageobjects/homepage/home.page.js');
var loginPage = require('../pageobjects/loginPage/login.page.js');
var since = require('jasmine2-custom-message');
var createPage = require('../pageobjects/createpost/create.page.js')
var dragAndDropFn = require("../utils/dragdrop_helper.js"); //this is your js file address

describe("Get to Create page and locate elem 2 from clothes", function () {





    beforeAll(function () {
        homePage.get();
        loginPage.loginWithSuccess('u1');
        homePage.waitPageLoad();
        createPage.getCreatePage();
        browser.sleep(5000);
    });



    it("Should find the element", function () {

        //since("Element was found").expect(createPage.getClothes(1)).not.toBe(null);


           var el = element(by.xpath('//*[@id="container-clothes"]/div[1]/div/img'));
      
            var tar = element(by.id('target-primary-first'));
            createPage.waitFor(tar);
            console.log(tar);
           
            createPage.dragAndDrop(el.getWebElement(),tar.getWebElement());

        // createPage.getClothes('0').then(function (el) {
        // var target = element(by.id('target-primary-first'));
        // createPage.waitFor(tar);
        // browser.driver.executeScript(dragAndDropFn, el.getWebElement(), target.getWebElement());
       
 

});

});