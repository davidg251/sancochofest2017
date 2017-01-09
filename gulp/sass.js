var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('./config.json'),
    requireDir = require('require-dir');

/*
* compila, minimifica y mueve archivos sass
*/
gulp.task('sass', function () {
  //return gulp.src(config.bowerDir + config.foundationPath+'/assets/foundation.scss')
  return gulp.src(config.projectPath +'/stylesheets/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(config.projectPath + '/stylesheets/'))
});