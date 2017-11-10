var HomePage = function () {
    var utils = require('../../utils/utils.js');

    var since = require('jasmine2-custom-message');
    var userName = element(by.xpath('//div[ng-show="details.created_by.avatar_url"]/div/div/a'));
    var logo = element(by.className('logo'));
    var btnLogin = element(by.xpath('//div[@ng-switch-when="password"]/div[2]/div/button'));
    var EC = protractor.ExpectedConditions;


    this.get = function () {
        browser.get('http://vh.com');
    };

    this.waitPageLoad = function () {
        browser.wait(EC.presenceOf(logo), 50000);
    }
    //numar comments per post

    this.getCommentsbyUsername2 = function (name) {
        var deferred = protractor.promise.defer();
        this.getPostByUsername(name).then(function (post) {
            if (post !== null) {
                post.element(by.css('.btn.btn-link.ng-binding')).getText().then(function (comment) {
                    console.log(comment);
                    deferred.fulfill(comment);
                });
            }
            else {
                since("No posts found for user " + name).expect(post).not.toBe(null);
                deferred.fulfill(null);
            }
        });
        return deferred.promise;
    };


    //likes per post
    this.getLikesFromPosts = function (name) {
        var deferred = protractor.promise.defer();
        this.getPostByUsername(name).then(function (post) {
            if (post !== null) {
                post.element(by.binding('details.total_likes')).getText().then(function (likes) {
                    deferred.fulfill(likes);
                    console.log(likes);

                });
            }
            else {
                since("No posts found for user " + name).expect(post).not.toBe(null);
                deferred.fulfill(null);
            }
        });



        return deferred.promise;

    };

    //numar posturi 

    this.getPostByUsername = function (name) {
        var deferred = protractor.promise.defer();
        var results = [];
        var wasFound = false;
        var postsNumber;
        element.all(by.xpath('//*[@ng-repeat-start="details in list track by $index"]')).then(function (allPosts) {
            console.log(allPosts.length + " posturi in homepage create de catre: ");
            postsNumber = allPosts.length;

            if (postsNumber > 0) {
                allPosts.forEach(function (post, index) {

                    post.element(by.css('.username.ng-binding')).getText().then(function (foundName) {
                        console.log(foundName);


                        if (foundName == name) {
                            results.push(post);
                            wasFound = true;
                        }
                        utils.resolvePromise(index, postsNumber, results, wasFound, deferred);
                    });

                });
            }
            else {
                utils.resolvePromise(-1, postsNumber, results, wasFound, deferred);
            }
        });
        return deferred.promise;

    };



}

module.exports = new HomePage();