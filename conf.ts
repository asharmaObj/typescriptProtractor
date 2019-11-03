// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, run `protractor conf.js`.
import {browser} from 'protractor';

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');
var dashboardReportDirectory = 'reports';

exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'firefox'
  },
  suites:{
    full:['specs/spec.js','specs/specPageObjects.js'],
    smoke:['specs/specPageObjects.js']
  },
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  
  //non angular app
  //browser.waitForAngularEnabled(false)

  // before all test suites
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false),
    // adding a wait before test cases.
    browser.manage().timeouts().implicitlyWait(5000);

      // xml report generated for dashboard
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: dashboardReportDirectory + '/xml',
          filePrefix: 'xmlOutput'
      }));

      var fs = require('fs-extra');
      if (!fs.existsSync(dashboardReportDirectory)) {
          fs.mkdirSync(dashboardReportDirectory);
      }

      jasmine.getEnv().addReporter({
          specDone: function (result) {
              if (result.status == 'failed') {
                  browser.getCapabilities().then(function (caps) {
                      var browserName = caps.get('browserName');

                      browser.takeScreenshot().then(function (png) {
                          var stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                          stream.write(new Buffer(png, 'base64'));
                          stream.end();
                      });
                  });
              }
          }
      });

  },

  onComplete: function () {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();

      capsPromise.then(function (caps) {
          browserName = caps.get('browserName');
          browserVersion = caps.get('version');
          var platform = caps.get('platform');

          var HTMLReport = require('protractor-html-reporter-2');
        var  testConfig = {
              reportTitle: 'Protractor Test Execution Report',
              outputPath: dashboardReportDirectory,
              outputFilename: 'index',
              screenshotPath: './',
              testBrowser: browserName,
              browserVersion: browserVersion,
              modifiedSuiteName: false,
              screenshotsOnlyOnFailure: true,
              testPlatform: platform
          };
          new HTMLReport().from(dashboardReportDirectory + '/xml/xmlOutput.xml', testConfig);
      });
  },
};