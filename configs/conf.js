// conf.js
var HtmlReporter = require('protractor-html-screenshot-reporter');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine2',
  getPageTimeout: 20000,
  allScriptsTimeout: 500000,
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../suites/createpage.test.js'],
  capabilities: {
    browserName: 'firefox'
  },


  onPrepare: function () {
    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    var today = new Date(),
    timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';


    var jasmineReporters = require('jasmine-reporters');
    var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
    return browser.getProcessedConfig().then(function (config) {
        var userName = browser.params.user,
            junitReporter = new jasmineReporters.JUnitXmlReporter({
                savePath: '../xml_results/',
                filePrefix: 'Results'
            });
        jasmine.getEnv().addReporter(junitReporter);
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "../xml_results/",
            takeScreenshotsOnlyOnFailures: true,
            fileName: 'Reports'
        }));
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayPending: true
            }
        }));
    });
}

}