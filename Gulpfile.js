//jshint esversion: 6

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/templates/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./public'))
  .pipe(livereload());
});

gulp.task('sass', function buildCSS() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'))
  .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.pug', ['views']);
});

gulp.task('default', ['views', 'sass', 'watch']);
