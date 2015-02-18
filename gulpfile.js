var gulp = require('gulp'),
    sequence = require('gulp-run-sequence'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    concatcss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlreplace = require('gulp-html-replace'),
    rimraf = require('rimraf'),
    connect = require('gulp-connect');

gulp.task('default', function () {
    connect.server({
	root: './www'
    });
});

gulp.task('build', function (cb) {
    sequence('clean', ['styles', 'js', 'html', 'templates'], 'app', cb);
});

gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});

gulp.task('styles', function () {
    return gulp.src([
//            './www/styles/**/*.css',
            './www/lib/bootstrap/dist/css/bootstrap.css',
            './www/lib/angular-ui-grid/ui-grid.css'
                ])
        .pipe(concatcss('styles.css'))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./tmp'));
});

gulp.task('js', function () {
    return gulp.src([
        './www/app/**/*.js',
        './www/lib/angular/angular.js',
        './www/lib/angular-ui-router/angular-ui-router.js',
        './www/lib/angular-ui-grid/angular-ui-grid.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./tmp'));
});

gulp.task('html', function () {
    return gulp.src('./www/index.html')
        .pipe(htmlreplace({
            js: 'app.js',
            css: 'styles.css'
        }))
        .pipe(gulp.dest('./tmp'));
});

gulp.task('templates', function () {
    return gulp.src('./www/templates/**/')
        .pipe(gulp.dest('./tmp/templates'));
});

gulp.task('app', function () {
    return gulp.src('./tmp/**/')
        .pipe(gulp.dest('./dist'));
});

// JS
// -jshint
// -uglifyjs
// -concat

// HTML
// html-replace

// CSS
// -cssmin (compressione)
// -concatcss
// -autoprefixer


