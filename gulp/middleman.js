var gulp = require('gulp'),
    requireDir = require('require-dir');

/*
* "compila" el sitio.
*/
gulp.task('middleman', function () {
  var spawn = require('child_process').spawn;
  var middleman = spawn('bundle', ['exec', 'middleman','build'],{cwd:'sancochofest2017/'});
});