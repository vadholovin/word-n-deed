module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('templates'));
    $.gulp.watch('./app/scss/**/*.scss', $.gulp.series('styles:app'));
    $.gulp.watch(['./app/img/**/*.{png,jpg,gif,svg}',
      './app/img/**/*.{png,jpg,gif,svg}'
    ], $.gulp.series('img:app'));
    $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('js:app'));
  });
};