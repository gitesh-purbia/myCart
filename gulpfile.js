const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');
const serverFactory = require('spa-server');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

gulp.task('webserver', () => {
  const server = serverFactory.create({
    path: './dist',
    port: 3000,
    fallback: 'index.html'
  });
  server.start();
});

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.tmp('index.html'), reloadBrowserSync);
  done();
}
