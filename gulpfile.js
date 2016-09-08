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
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(config.projectPath + '/stylesheets/main.min.css'))
});

gulp.task('middleman', function () {
  var spawn = require('child_process').spawn;
  var middleman = spawn('bundle', ['exec', 'middleman','build']);
  console.log(middleman);
});

gulp.task('watch_mddlmn', function () {
  gulp.watch(config.bowerDir + config.foundationPath + '/scss/**/*.scss', ['sass']); 
})

gulp.task('watch', function(){
  gulp.watch(config.projectPath+'/**', ['middleman']); 
})

gulp.task('default', ['middleman', 'sass', 'watch']);