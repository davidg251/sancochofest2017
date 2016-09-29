var gulp = require('gulp'),
    sass = require('gulp-sass'),
    config = require('./gulp/config.json'),
    fs = require('fs');
    requireDir = require('require-dir');

requireDir('./gulp');

gulp.task('watch', function () {
  gulp.watch(config.bowerDir + config.foundationPath + '/scss/**/*.scss', ['sass']); 
  gulp.watch(config.projectPath+'/**', ['middleman']); 
})

gulp.task('default', ['middleman', 'sass', 'watch']);
