var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('./gulp/config.json'),
    fs = require('fs');
    requireDir = require('require-dir');
    connect = require('gulp-connect');

requireDir('./gulp');


 
gulp.task('server', function() {
  connect.server({
    root: 'sancochofest2017/build/'
    //livereload: true
  });
});


gulp.task('watch', function () {
  gulp.watch(config.projectPath +'/stylesheets' + '/*.scss', ['sass']); 
  gulp.watch(config.projectPath+'/**', ['middleman']); 
})

gulp.task('default', ['middleman', 'sass', 'watch', 'server']);
