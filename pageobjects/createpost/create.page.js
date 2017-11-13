var CreatePost = function () {

    var utils = require('../../utils/utils.js');
    var since = require('jasmine2-custom-message');
    var EC = protractor.ExpectedConditions;
    var titleVerify = element(by.css('h1.page-heading-title.text-center.ng-binding'));
    const JS_HTML5_DND = 'function e(e,t,n,i){var r=a.createEvent("DragEvent");r.initMouseEvent(t,!0,!0,o,0,0,0,c,g,!1,!1,!1,!1,0,null),Object.defineProperty(r,"dataTransfer",{get:function(){return d}}),e.dispatchEvent(r),o.setTimeout(i,n)}var t=arguments[0],n=arguments[1],i=arguments[2]||0,r=arguments[3]||0;if(!t.draggable)throw new Error("Source element is not draggable.");var a=t.ownerDocument,o=a.defaultView,l=t.getBoundingClientRect(),u=n?n.getBoundingClientRect():l,c=l.left+(l.width>>1),g=l.top+(l.height>>1),s=u.left+(u.width>>1)+i,f=u.top+(u.height>>1)+r,d=Object.create(Object.prototype,{_items:{value:{}},effectAllowed:{value:"all",writable:!0},dropEffect:{value:"move",writable:!0},files:{get:function(){return this._items.Files}},types:{get:function(){return Object.keys(this._items)}},setData:{value:function(e,t){this._items[e]=t}},getData:{value:function(e){return this._items[e]}},clearData:{value:function(e){delete this._items[e]}},setDragImage:{value:function(e){}}});if(n=a.elementFromPoint(s,f),!n)throw new Error("The target element is not interactable and need to be scrolled into the view.");u=n.getBoundingClientRect(),e(t,"dragstart",101,function(){var i=n.getBoundingClientRect();c=i.left+s-u.left,g=i.top+f-u.top,e(n,"dragenter",1,function(){e(n,"dragover",101,function(){n=a.elementFromPoint(c,g),e(n,"drop",1,function(){e(t,"dragend",1,callback)})})})})';
    

    this.getCreatePage = function () {
        browser.get('http://vh.com/styleboard/create');
        this.waitPageLoad();
    };

    this.waitPageLoad = function () {
        browser.wait(EC.presenceOf(titleVerify), 50000);
    }

    this.waitFor = function (eleme) {
        browser.wait(EC.presenceOf(eleme), 50000);
    }

    // this.getSpecificCategory = function(categoryIndex)

    // {
    //     var deferred = protractor.promise.defer();
    //          element.all(by.repeater('item in closet')).then(function (category) {
    //         console.log(category.length + " categories in system");
    //         //var specificCategory = category[0];
    //         return category[categoryIndex];

    //     });
    // };

    this.getClothes = function (elemIndex) {
        var deferred = protractor.promise.defer();
        var wasFound = false;
        var elemCount;
        var results = [];

        element.all(by.repeater('item in closet')).then(function (category) {
            console.log(category.length + " categories in system");
            category[0].all(by.repeater('product in item.products')).then(function (allElem) {
                elemCount = allElem.length;
                console.log(elemCount + ' elemente in categorie ');
                if (elemCount > 0 && elemCount <= elemCount-1) {
//&& elemCount <= elemCount-1
                    deferred.fulfill(allElem[elemIndex].getWebElement());

                }
                else {
                    since("Element not found").expect(elemCount).not.toBe(0);
                    deferred.fulfill(null);
                }
            });
        });
        return deferred.promise;
    };

    this.getAccessories = function (elemIndex) {
        var deferred = protractor.promise.defer();
        var wasFound = false;
        var elemCount;
        var results = [];

        element.all(by.repeater('item in closet')).then(function (category) {
            console.log(category.length + " categories in system");
            //var specificCategory = category[0];

            category[2].all(by.repeater('product in item.products')).then(function (allElem) {


                elemCount = allElem.length;
                console.log(elemCount + ' elemente in categoria Accessories');


                if (elemCount > 0) {
                    console.log(allElem[elemIndex]);

                    allElem[elemIndex].element(by.xpath('//*[@id="container-clothes"]/div[1]/div/img')).then(function () {

                        wasFound = true;
                        results.push(theElement);
                        utils.resolvePromise(index, postsNumber, results, wasFound, deferred);
                    });
                }
                else {
                    since("Element not found").expect(theElement).not.toBe(null);
                    utils.resolvePromise(-1, postsNumber, results, wasFound, deferred);
                }
            });
        });
        return deferred.promise;
    };

    this.getHandbags = function (elemIndex) {
        var deferred = protractor.promise.defer();
        var wasFound = false;
        var elemCount;
        var results = [];

        element.all(by.repeater('item in closet')).then(function (category) {
            console.log(category.length + " categories in system");
            //var specificCategory = category[0];

            category[3].all(by.repeater('product in item.products')).then(function (allElem) {


                elemCount = allElem.length;
                console.log(elemCount + ' elemente in categoria Handbags');


                if (elemCount > 0) {
                    console.log(allElem[elemIndex]);

                    allElem[elemIndex].element(by.xpath('//*[@id="container-clothes"]/div[1]/div/img')).then(function () {

                        wasFound = true;
                        results.push(theElement);
                        utils.resolvePromise(index, postsNumber, results, wasFound, deferred);
                    });
                }
                else {
                    since("Element not found").expect(theElement).not.toBe(null);
                    utils.resolvePromise(-1, postsNumber, results, wasFound, deferred);
                }
            });
        });
        return deferred.promise;
    };

    this.getShoes = function (elemIndex) {
        var deferred = protractor.promise.defer();
        var wasFound = false;
        var elemCount;
        var results = [];

        element.all(by.repeater('item in closet')).then(function (category) {
            console.log(category.length + " categories in system");
            //var specificCategory = category[0];

            category[1].all(by.repeater('product in item.products')).then(function (allElem) {


                elemCount = allElem.length;
                console.log(elemCount + ' elemente in categoria Shoes');


                if (elemCount > 0) {
                    console.log(allElem[elemIndex]);

                    allElem[elemIndex].element(by.xpath('//*[@id="container-clothes"]/div[1]/div/img')).then(function () {

                        wasFound = true;
                        results.push(theElement);
                        utils.resolvePromise(index, postsNumber, results, wasFound, deferred);
                    });
                }
                else {
                    since("Element not found").expect(theElement).not.toBe(null);
                    utils.resolvePromise(-1, postsNumber, results, wasFound, deferred);
                }
            });
        });
        return deferred.promise;
    };

    this.dragAndDrop = function (elem, target) {



   // browser.actions().dragAndDrop(elem, target).perform();
   
      browser.actions().mouseMove(elem).mouseDown().mouseMove(target).mouseUp().perform();
       browser.actions().mouseMove(elem).mouseDown().mouseMove(target).perform();
       browser.actions().mouseMove({x:0, y:5}).perform(); 
      browser.actions().mouseUp().perform();



    // var e1 = element(by.id(elem));
    // var e2 = element(by.id(target));
    // browser.executeScript(JS_HTML5_DND, elem.getWebElement(), target.getWebElement());
    };


}

module.exports = new CreatePost();