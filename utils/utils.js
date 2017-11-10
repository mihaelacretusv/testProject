var Utils = function () {
    

 this.resolvePromise = function(index, arrNo, result, found, promise) {
    if (index === arrNo - 1) {
        if (result.length === 0 && !found) {
            promise.fulfill(null);
        } else {
            promise.fulfill(result[0]);
        }
    }
};

this.getCreatePage = function () {
    browser.get('http://vh.com/styleboard/create');
    
};

}
module.exports = new Utils();
