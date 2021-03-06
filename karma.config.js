// Karma configuration
// Generated on Mon Jan 23 2017 17:16:45 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'war/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: ['js/src/*.js','js/test/*.js'],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    junitReporter: {
        outputDir: 'build/junit/', // results will be saved as $outputDir/$browserName.xml
        outputFile: undefined // if included, results will be saved as $outputDir/$browserName/$outputFile
      },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["spec","coverage","junit"],
    plugins: ["karma-spec-reporter","karma-jasmine","karma-phantomjs-launcher","karma-coverage","karma-junit-reporter"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    
    preprocessors: 	{
    					'js/src/*.js': ['coverage']
    				},
    coverageReporter: {
        dir : 'build/reports/coverage/',
        	 reporters: [  { type: 'html', subdir: 'html-report' , file: 'index.xml' },
        	               { type: 'cobertura', subdir: 'cobertura-report', file: 'cobertura.xml' },
        	               { type: 'text-summary' }
        	 	]
    }
  })
}
