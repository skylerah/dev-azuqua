//jshint esversion: 6

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const livereload = require('gulp-livereload');

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/templates/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./public'))
  .pipe(gutil.env.env === 'dev' ? livereload() : gutil.noop());
});

gulp.task('sass', function buildCSS() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'))
  .pipe(gutil.env.env === 'dev' ? livereload() : gutil.noop());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.pug', ['views']);
});

if (gutil.env.env === 'dev') {
  gulp.task('default', ['views', 'sass', 'watch']);
} else {
  gulp.task('default', ['views', 'sass']);
}
