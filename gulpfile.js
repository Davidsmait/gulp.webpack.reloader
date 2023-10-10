const gulp = require('gulp')
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();


function jsBuild() {
    return gulp
        .src('./src/**/*.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
}

function bowserSyncTask(cb) {
    browserSync.init({
        server: {
            baseDir: './dist',
            index: "index.html",
        }
    })
    cb()
}
function reloadBrowserTask(cb) {
    browserSync.reload()
    cb()
}
function watch() {
    gulp.watch('./**/*.html', reloadBrowserTask)
    gulp.watch(['./src/**/*.js', './src/**/*.jsx'], gulp.series(jsBuild, reloadBrowserTask))
}

exports.default = gulp.series(jsBuild, bowserSyncTask, watch)
