// modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');

  // folders
  var folder = {
    src: 'src/',
    build: 'build/'
  };

  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
  };

  gulp.task('minify', function() {
    var input = folder.src + 'html/*.html';
    var output = folder.build;
    return gulp.src( input )
      .pipe( htmlmin( {collapseWhitespace: true}) )
      .pipe( gulp.dest( output ) );
  })

  gulp.task('sass', function() {
    var input = folder.src + 'scss/**/*.scss';
    var output = folder.build + 'css/';
    return gulp
      .src( input )
      .pipe( sourcemaps.init() )
      .pipe( sass(sassOptions).on('error', sass.logError) )
      .pipe(sourcemaps.write())
      .pipe( autoprefixer() )
      .pipe( gulp.dest( output ));
  });

  gulp.task('watch', function() {
    return gulp
      .watch( folder.src , ['sass'] )
      .on('change', function(event) {
        console.log('File' + event.path + 'was ' + event.type + ', running tasks...') 
      });
  });

  gulp.task('default', ['sass', 'minify','watch']);
;