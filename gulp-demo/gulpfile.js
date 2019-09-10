const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const fileinclude = require('gulp-file-include')
gulp.task('first', () => {
    console.log('我的第一个gulp任务执行了')

    gulp.src('./src/public/css/login.css')
        .pipe(gulp.dest('dist/css'))
})


gulp.task('second', () => {

    console.log('第二个gulp任务执行')
    gulp.src('./src/views/*.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
})