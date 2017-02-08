const gulp = require('gulp');
const open = require('gulp-open')
var Server = require('karma').Server;

gulp.task('unit:coverage', function (done) {
	  new Server({
		    configFile: __dirname + '/karma.config.js'
		    }, function() { done(); }).start();
});

/**
 * @name coverage
 * @description Generates and shows the code coverage report
 */
gulp.task('coverage',['unit:coverage'], function() {
    gulp.src('war/coverage/index.html')
        .pipe(open());
    });

/**
 * @name default
 * @description The standard gulp process for building an app.
 * Runs through a list of tasks individually
 *
 * `$ gulp`
 */
gulp.task('default', function() {
  gulp.start('unit:coverage');
});