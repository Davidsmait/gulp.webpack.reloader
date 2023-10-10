const gulp = require('gulp')
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();


gulp.task('default', function () {
    return gulp
        .src('./src/**/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task('browserSync', function (cb) {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    })
    cb()
})

gulp.task('bowserReload', function (cb) {
    browserSync.reload()
    cb()
})

gulp.task('watch', function () {
    gulp.watch('./*.html', gulp.series('bowserReload'))
    gulp.watch('./src/**/*.js', gulp.series('default', 'bowserReload'))
})

exports.default = gulp.series('default', 'watch')
