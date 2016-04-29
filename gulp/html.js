var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('html', function () {
  return gulp.src('./index.html.orig')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist/'));
});
