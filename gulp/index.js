var gulp = require('gulp');

// tasks
require('./browserify');
require('./html');
require('./watch');

// recipes
gulp.task('js', ['browserify']);
gulp.task('css', []);

// cli
gulp.task('build', ['js', 'css', 'html']);
gulp.task('default', ['build', 'watch']);
