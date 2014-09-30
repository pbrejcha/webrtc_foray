var gulp = require('gulp');
var bower = require('bower');

gulp.task('default', function () {

});

gulp.task('bower', function (cb) {
    bower.commands.install([], {save: true}, {})
        .on('end', function (installed) {
            cb();
        });
});