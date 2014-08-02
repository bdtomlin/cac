var gulp = require('gulp'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    karma = require('gulp-karma');

gulp.task('default', function(){
  connect.server({
    root: 'app/',
    port: '8888'
  });
});

gulp.task('copy-html-files', function(){
  gulp.src('./app/**/*.html', '!./app/index.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('copy-images', function(){
  gulp.src('./app/images/*')
  .pipe(gulp.dest('build/images/'));
});

gulp.task('usemin', function(){
  gulp.src('./app/index.html')
  .pipe(usemin({
    css: [minifyCss(), 'concat', rev()],
    js: [uglify(), rev()]
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copy-html-files', 'copy-images', 'usemin']);
