const terser = require('gulp-terser'),
      concat = require('gulp-concat'),
      scriptsPATH = {
        "input": "./app/js/",
        "ouput": "./dist/js/"
      };

module.exports = function () {
  $.gulp.task('libsJS:app', () => {
    return $.gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/svg4everybody/dist/svg4everybody.min.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'node_modules/inputmask/dist/inputmask.min.js',
        'node_modules/ismobilejs/dist/isMobile.min.js',
        'app/libs/micromodal/micromodal.polyfill.min.js',
        'app/libs/micromodal/micromodal.min.js',
    ])
      .pipe(concat('libs.min.js'))
      .pipe($.gulp.dest(scriptsPATH.ouput));
  });

  $.gulp.task('libsJS:dist', () => {
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/svg4everybody/dist/svg4everybody.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/inputmask/dist/inputmask.min.js',
      'node_modules/ismobilejs/dist/isMobile.min.js',
      'app/libs/micromodal/micromodal.polyfill.min.js',
      'app/libs/micromodal/micromodal.min.js',
    ])
      .pipe(concat('libs.min.js'))
      .pipe(terser())
      .pipe($.gulp.dest(scriptsPATH.ouput));
  });

  $.gulp.task('js:app', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe($.gulp.dest(scriptsPATH.ouput))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('js:dist', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe($.gulp.dest(scriptsPATH.ouput))
  });

  $.gulp.task('js:dist-min', () => {
    return $.gulp.src([scriptsPATH.input + '*.js',
        '!' + scriptsPATH.input + 'libs.min.js'
      ])
      .pipe(concat('main.min.js'))
      .pipe(terser())
      .pipe($.gulp.dest(scriptsPATH.ouput))
  });
};