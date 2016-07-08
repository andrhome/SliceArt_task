var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-minify-css'),
	rename = require('gulp-rename'),
  	notify = require('gulp-notify'),
  	sass = require('gulp-sass');

gulp.task('css', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(rename('bundle.min.css'))
    .pipe(notify('Done!'))
    .pipe(gulp.dest('./public/build/'));
});

gulp.task('sass', function () {
  return gulp.src('./public/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// gulp.task('watch', function () {
//     gulp.watch('./public/css/*.css', ['css'])
// });

gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/*.scss', ['sass', 'css']);
});