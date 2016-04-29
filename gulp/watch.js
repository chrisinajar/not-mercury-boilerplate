var gulp = require('gulp');
var watch = require('gulp-sane-watch');

gulp.task('watch', function () {
  watch('src/**/*.js', {debounce: 200}, function () {
    gulp.start('js');
  });
  watch(['css/**/*', 'theme.*'], {debounce: 200}, function () {
    gulp.start('css');
  });
  watch('index.html.orig', {debounce: 200}, function () {
    gulp.start('html');
  });
});
