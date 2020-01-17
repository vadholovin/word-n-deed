const plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  filter = require('gulp-filter'),
  prettify = require('gulp-jsbeautifier');

const source = 'app/pug/**/*.pug';
const dest = 'dist';

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src(source)
      .pipe(plumber())
      .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug())
      .pipe(prettify({
        braceStyle: 'expand',
        indentWithTabs: true,
        indentInnerHtml: true,
        preserveNewlines: true,
        endWithNewline: true,
        wrapLineLength: 120,
        maxPreserveNewlines: 50,
        wrapAttributesIndentSize: 1,
        unformatted: ['use'],
      }))
      // .pipe(beautify({
      //   indent_size: 2
      // }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest(dest))
      .on('end', $.browserSync.reload);
  });
};