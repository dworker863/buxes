const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;

function html() {
  return gulp
    .src('src/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      }),
    )
    .pipe(gulp.dest('dist'));
}

function styles() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(['node_modules/jquery/dist/jquery.min.js', './src/js/scripts.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'src',
    },
  });

  gulp.watch('src/**/*.html', gulp.series(html)).on('change', browserSync.reload);
  gulp.watch('src/scss/**/*.scss', gulp.series(styles)).on('change', browserSync.reload);
  gulp.watch('src/js/scripts.js', gulp.series(scripts)).on('change', browserSync.reload);
}

function clear() {
  return del('dist');
}

function build(done) {
  gulp.src('src/css/styles.min.css').pipe(gulp.dest('dist/css'));

  gulp.src('src/js/scripts.min.js').pipe(gulp.dest('dist/js'));

  gulp.src('src/fonts/**').pipe(gulp.dest('dist/fonts'));

  gulp.src('src/img/**').pipe(gulp.dest('dist/img'));

  done();
}

exports.default = gulp.series(gulp.parallel(styles, scripts), watch);
exports.build = gulp.series(gulp.parallel(styles, scripts), clear, html, build);
