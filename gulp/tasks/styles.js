const plumber = require('gulp-plumber'),
      scss = require('gulp-sass'),
      sassGlob = require('gulp-sass-glob'),
      autoprefixer = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      csscomb = require('gulp-csscomb'),
      sourcemaps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      stylesPATH = {
        "input": "./app/scss/",
        "ouput": "./dist/css/"
      };

module.exports = () => {
  $.gulp.task('styles:app', () => {
    return $.gulp.src(stylesPATH.input + 'main.scss')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(scss({
        includePaths: ['node_modules'],
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(rename('styles.min.css'))
      .pipe($.gulp.dest(stylesPATH.ouput))
      .on('end', $.browserSync.reload);
  });
  $.gulp.task('styles:dist', () => {
    return $.gulp.src(stylesPATH.input + 'main.scss')
      .pipe(scss({
        includePaths: ['node_modules'],
      }))
      .pipe(autoprefixer())
      .pipe(csscomb())
      .pipe($.gulp.dest(stylesPATH.ouput))
  });
  $.gulp.task('styles:dist-min', () => {
    return $.gulp.src(stylesPATH.input + 'main.scss')
      .pipe(scss({
        includePaths: ['node_modules'],
      }))
      .pipe(autoprefixer())
      .pipe(csscomb())
      .pipe(csso())
      .pipe(rename('styles.min.css'))
      .pipe($.gulp.dest(stylesPATH.ouput))
  });
};