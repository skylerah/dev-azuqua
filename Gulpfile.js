//jshint esversion: 6

const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/templates/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'))
  .pipe(gutil.env.env === 'dev' ? livereload() : gutil.noop());
});

gulp.task('sass', function buildCSS() {
  return gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))
  .pipe(gutil.env.env === 'dev' ? livereload() : gutil.noop());
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
});

if (gutil.env.env === 'dev') {
  gulp.task('default', ['views', 'sass', 'watch', 'compress']);
} else {
  gulp.task('default', ['views', 'sass', 'compress']);
}
