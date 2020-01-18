const imagemin = require('gulp-imagemin'),
    // imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    mozjpeg = require('imagemin-mozjpeg'),
    cache = require('gulp-cache');

const imgPATH = {
  input: ["./app/img/**/*.{png,jpg,gif,svg}",
    '!./app/img/svg/*'
  ],
  ouput: "./dist/img/"
};

module.exports = function () {
  $.gulp.task('img:app', () => {
    return $.gulp.src(imgPATH.input)
      .pipe($.gulp.dest(imgPATH.ouput));
  });

  $.gulp.task('img:dist', () => {
    return $.gulp.src(imgPATH.input)
      .pipe(imagemin([
        mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 3
        }),
        pngquant({
          quality: [0.65, 0.7],
          speed: 5
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: false,
            cleanupIDs: false,
          }]
        }),
      ], {
        verbose: true
      }))
      .pipe($.gulp.dest(imgPATH.ouput));
  });
};