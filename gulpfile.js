var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("yeeep - worked")
});

gulp.task('html', function() {
  console.log("something happened here in html.")
});

gulp.task('styles', function() {
  console.log("css altered.")
})

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html')
  });
  Watch('./app/assets/styles/styles.css', function() {
    gulp.start('styles')
  })
});
