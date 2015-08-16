'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var plumber = require('gulp-plumber');

// necessary for gulp-mocha to work with es6
require('babel/register');

var config = {
  js: {
    src: './src/*.js'
  },
  test: {
    src: './test/*.spec.js'
  }
};

// Tasks
// ---------------------------------------------------------
gulp.task('lint', function () {
  return gulp.src(config.js.src)
    .pipe(plumber())
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failOnError());
});

gulp.task('test', function () {
  return gulp.src(config.test.src)
    .pipe(plumber())
    .pipe(mocha());
});

gulp.task('watch', function () {
  gulp.watch(config.js.src, ['lint', 'test']);
});

// default task
// -----------------------------------------------
gulp.task('default', ['lint', 'test', 'watch']);
