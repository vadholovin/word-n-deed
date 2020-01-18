const plumber = require('gulp-plumber'),
      pug = require('gulp-pug'),
      filter = require('gulp-filter'),
      prettify = require('gulp-jsbeautifier');

const source = 'app/pug/**/*.pug',
      dest = 'dist';

module.exports = () => {
  $.gulp.task('templates', () => {
    return $.gulp.src(source)
      .pipe(plumber())
      .pipe(filter(file => {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug())
      .pipe(prettify({
        braceStyle: 'expand',
        indentSize: 2,
        indentWithTabs: false,
        indentInnerHtml: true,
        preserveNewlines: true,
        endWithNewline: true,
        wrapLineLength: 120,
        maxPreserveNewlines: 50,
        wrapAttributesIndentSize: 1,
        unformatted: ['use'],
        "html": {
          "end_with_newline": true,
          "indent_size": 2,
          preserveNewlines: true,
          "indent-empty-lines": true,
          wrapAttributesIndentSize: 1,
          inline: [],
        }
      }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest(dest))
      .on('end', $.browserSync.reload);
  });
};