var EditProfile = function () {

    var since = require('jasmine2-custom-message');
    var EC = protractor.ExpectedConditions;
    var title = element(by.css('page-heading-title.text-center.ng-binding'));

    this.getEditProfile = function () {
        browser.get('http://vh.com/profile-edit');
        //element(by.css('svg-icon.icon-gear')).click();
        browser.wait(element(EC.presenceOf(title)));

    };

    this.modifyNameField = function (newValue) {
        var field = element(by.id('profile-name'));

        field.clear();
        field.sendKeys(newValue);
    };

    this.modifyEmailField = function (newValue) {
        var field = element(by.id('profile-email'));

        field.clear();
        field.sendKeys(newValue);
    };

    this.modifyUsernameField = function (newValue) {
        var field = element(by.id('profile-username'));

        field.clear();
        field.sendKeys(newValue);
    };

    this.modifyPhoneField = function (newValue) {
        var field = element(by.id('profile-phone'));

        field.clear();
        field.sendKeys(newValue);
    };

    this.modifyBioField = function (newValue) {
        var field = element(by.id('profile-bio'));
        field.clear().sendKeys(newValue);
    };

    this.modifyGenderField = function (newValue) {
        var select = element(by.model('profile.info.gender'));

        // if (newValue == 'f') {
        //     select.$('[value="f"]').click();
        //     }
        // else {
        //     select.$('[value="m"]').click();
        // }

        switch(newValue) {
            case 'f':

            select.$('[value="f"]').click();
            
                break;
            case 'm':
            select.$('[value="m"]').click();
            break;

            default:
            select.$('[value=""]').click();
        }

    };

    this.modifyEmailField = function (newValue) {
        var field = element(by.id('profile-email'));

        field.clear();
        field.sendKeys(newValue);
    };

    this.modifyEmailField = function (newValue) {
        var field = element(by.id('profile-email'));

        field.clear();
        field.sendKeys(newValue);
    };

    this.modifyEmailField = function (newValue) {
        var field = element(by.id('profile-email'));

        field.clear();
        field.sendKeys(newValue);
    };

}
module.exports = new EditProfile();