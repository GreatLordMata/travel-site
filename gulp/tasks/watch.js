var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-Sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
    browserSync.reload();
  });
});

gulp.task('cssInject', ['styles'], ()=> {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
