const gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test', function (done) {
	  new Server({
		    configFile: __dirname + '/karma.config.js'
//		    singleRun: true,
//		    reporters: ['progress', 'html'],
//
//		    // the default configuration
//		    htmlReporter: {
//		      outputDir: 'tests/units.html', // where to put the reports 
//		      templatePath: null, // set if you moved jasmine_template.html
//		      focusOnFailures: true, // reports show failures on start
//		      namedFiles: false, // name files instead of creating sub-directories
//		      pageTitle: null, // page title for reports; browser info by default
//		      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
//		      reportName: 'report-summary-filename', // report summary filename; browser info by default
//
//
//		      // experimental
//		      preserveDescribeNesting: false, // folded suites stay folded 
//		      foldAll: false, // reports start folded (only with preserveDescribeNesting)
//		    },
//
//		    // add to plugins
//		    plugins: [
//		      // other plugins
//		      'karma-html-reporter'
//		    ]
//
////		    htmlReporter: {
////		      outputFile: 'tests/units.html',
////
////		      // Optional
////		      pageTitle: 'Unit Tests',
////		      subPageTitle: 'A sample project description',
////		      groupSuites: true,
////		      useCompactStyle: true,
////		      useLegacyStyle: true
////		    }
		    }, function() { done(); }).start();
});

///**
// * @name coverage
// * @description Generates and shows the code coverage report
// */
//gulp.task('test-html', ['unit:coverage'], function() {
//	return gulp.src('.war/tests/units.html')
//    .pipe(open());
//    });
//gulp.task('coverage', ['unit:coverage'], function() {
//	gulp.src('.war/tests/units.html')
//    .pipe(open());
//    return gulp.src('.war/coverage/index.html')
//        .pipe(open());
//    });
//
///**
// * @name default
// * @description The standard gulp process for building an app.
// * Runs through a list of tasks individually
// *
// * `$ gulp`
// */
//gulp.task('default', function() {
//  gulp.start('unit:coverage');
//  //gulp.start('test-html');
//});