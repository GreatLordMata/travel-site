var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars')
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-Sync').create();

gulp.task('default', function() {
  console.log("yeeep - worked")
});

gulp.task('html', function() {
  console.log("something happened here in html.")
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    gulp.start('html')
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
