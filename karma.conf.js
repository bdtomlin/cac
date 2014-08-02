// Karma configuration
// Generated on Fri Aug 01 2014 14:14:32 GMT-0500 (CDT)

// crazy hack to make Karma read javascripts from home file
// I should make a preprocessor.
// This is idea mostly inspired by another preprocessor
// "karma-preprocessor-pullscripts": "^0.2.0"
// but it was a lot of code plus dependencies and didn't work :)
var fs       = require('fs'),
    fileList = [],
    content  = fs.readFileSync('./app/index.html', 'utf8'),
    scripts  = content.match(/src=['"](.*\.js)['"]/gm);

for(var i=0, l=scripts.length; i<l; i++){
  var src = scripts[i].replace(/"/g, '');
  src = src.replace(/src=\.\//g, './app/');
  fileList.push(src);
}
fileList.push('./app/bower_components/angular-mocks/angular-mocks.js');
fileList.push('./app/cac-app/**/*_spec.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: fileList,

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
