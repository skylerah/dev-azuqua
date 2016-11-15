//jshint esversion: 6

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');

gulp.task('views', function() {
  return gulp.src('./src/views/templates/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  .pipe(livereload());
});

gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))
  .pipe(livereload());
});

gulp.task('compress', function() {
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/views/**/*.pug', ['views']);
  gulp.watch('./src/content/markdown/*.md', ['views']);
});

gulp.task('default', ['views', 'sass', 'watch', 'compress']);
