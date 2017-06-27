var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "localhost:3000",
    reloadDelay: 200,
    files: [
      "app/views/*/*.ejs",
      "app/routes/*.js",
      "app/models/*.js",
      "config/*.js",
    ]
  });
});
