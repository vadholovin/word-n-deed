const plumber = require('gulp-plumber'),
  pug = require('gulp-pug'),
  beautify = require('gulp-jsbeautifier');

const source = 'app/pug/**/*.pug';
const dest = 'dist';

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src(source)
      .pipe(plumber())
      .pipe(pug())
      .pipe(beautify({
        indent_size: 2
      }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest(dest))
      .on('end', $.browserSync.reload);
  });
};