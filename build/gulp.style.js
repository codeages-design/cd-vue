const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

gulp.task('style', function() {
  return gulp.src('../src/styles/index.less')
      .pipe(less())
      .pipe(autoprefixer({
          browsers: ['last 2 versions', 'ie > 8']
      }))
      .pipe(cssmin())
      .pipe(gulp.dest('../dist/styles'));
});

gulp.task('copy', function() {
  return gulp.src('./src/styles/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/styles/fonts'));
});

gulp.task('default', ['style', 'copy']);