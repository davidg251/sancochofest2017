var gulp = require('gulp'),
    sass = require('gulp-sass');


var config = {
  bowerDir : './bower_components',
  projectPath : './sancochofest2017/source',
  foundationPath : '/foundation-sites'
}

gulp.task('sass', function () {
  console.log("una" + config.bowerDir + config.foundationPath+'/scss/foundation.scss')
  return gulp.src(config.bowerDir + config.foundationPath+'/assets/foundation.scss')
    .pipe(sass({
      //outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(config.projectPath + '/stylesheets'))
});

gulp.task('watch', function(){
  gulp.watch(config.bowerDir + config.foundationPath + '/scss/**/*.scss', ['sass']); 
})

gulp.task('default', ['sass', 'watch']);