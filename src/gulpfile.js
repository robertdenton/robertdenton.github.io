var gulp = require('gulp'), 
connect = require('gulp-connect'),
less = require('gulp-less'),
minifyCSS = require('gulp-csso')
mustache = require('gulp-mustache'),
pkg = require('./package.json');

// -------------------------

gulp.task('webserver', function() {
  connect.server({
    root: '../',
    livereload: true
  });
});
 
gulp.task('less', function() {
  return gulp.src('less/main.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('../'))
    .pipe(connect.reload());
});

gulp.task('html', function(){
  return gulp.src('html/index.html')
  .pipe(mustache({
    title: pkg.meta.title,
    description: pkg.meta.description
  }))
  .pipe(gulp.dest('../'))
  .pipe(connect.reload());
});
 
gulp.task('watch', function() {
    gulp.watch('less/**/*', ['less']);
    gulp.watch('html/**/*', ['html']);
})

// ---------------------

gulp.task('serve', ['less', 'html', 'webserver', 'watch']);
gulp.task('default', ['less','html']);




 
