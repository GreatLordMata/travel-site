var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-Sync').create();

gulp.task('watch', function() {
  notify: false,
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], ()=> {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
