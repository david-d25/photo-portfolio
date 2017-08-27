'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rimraf = require('rimraf'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var path = {
  build: {
    html: 'build/',
    php: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/'
  },
  src: {
    html: 'src/*.html',
    php: 'src/*.php',
    js: 'src/js/*.js',
    style: 'src/style/*.+(scss|css)',
    img: 'src/img/**/*.*',
    fonts: 'src/**/*.+(ttf|woff)'
  },
  watch: {
    html: 'src/**/*.html',
    php: 'src/**/*.php',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/**/*.+(ttf|woff)'
  },
  clean: './build'
};

var config = {
  server: {
    baseDir: "./build/"
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: 'Frontend_Devil'
}

gulp.task('html:build', function() {
 gulp.src(path.src.html)
  .pipe(gulp.dest(path.build.html))
  .pipe(reload({stream: true}))
  .on('error', errorHandler);
});
gulp.task('php:build', function() {
 gulp.src(path.src.php)
  .pipe(gulp.dest(path.build.php))
  .pipe(reload({stream: true}))
  .on('error', errorHandler);
});
gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}))
    .on('error', errorHandler);
});
gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', errorHandler)
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});
gulp.task('image:build', function () {
  gulp.src(path.src.img)
    .on('error', errorHandler)
    .pipe(gulp.dest(path.build.img)) 
    .on('error', errorHandler)
    .pipe(reload({stream: true}))
    .on('error', errorHandler);
});
gulp.task('connect', function() {
    connect.server();
});
gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .on('error', errorHandler);
});

gulp.task('build', [
  'html:build',
  'js:build',
  'php:build',
  'style:build',
  'fonts:build',
  'image:build'
]);

gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.php], function(event, cb) {
    gulp.start('php:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('webserver', function () {
  browserSync(config);
});


gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);

function errorHandler(error) {
  console.log("Error:\n" + error.toString());
  this.emit('end');
}