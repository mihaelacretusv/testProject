// login.page.js
var LoginPage = function () {



    var usernameField = element(by.model('user.username'));
    var btnContinue = element(by.xpath('//div[@ng-switch-when="username"]/div[2]/div/button'));
    var passwordField = element(by.model('user.password'));
    var btnLogin = element(by.xpath('//div[@ng-switch-when="password"]/div[2]/div/button'));
    var EC = protractor.ExpectedConditions;
    var errorMessage = element(by.xpath('//div[@ng-switch-when="password"]/div/div[1]/div[3]'));

    this.errorMessageGenerated = function () {
        console.log(errorMessage);

    };


    this.get = function () {
        browser.get('http://vh.com');
    };

    this.setName = function (name) {
        usernameField.sendKeys(name);
    };

    this.clickContinue = function () {
        browser.wait(EC.presenceOf(btnContinue), 50000);
        btnContinue.click();

    };

    this.clickLogin = function () {
        browser.wait(EC.presenceOf(btnLogin), 50000);
        btnLogin.click();

    };

    this.setPassword = function (pass) {
        passwordField.sendKeys(pass);

    };

    this.loginWithSuccess = function (name) {
        browser.wait(EC.presenceOf(usernameField), 50000);
        this.setName(name);
        this.clickContinue();
        browser.wait(EC.presenceOf(passwordField), 50000);
       
        this.setPassword("u1");
        this.clickLogin();

    }
};

module.exports = new LoginPage();