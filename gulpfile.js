const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');


// Task to concatenate and minify JavaScript files
gulp.task('js', function () {
  return gulp.src('./src/components/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

// Task to concatenate and minify CSS files
gulp.task('css', function () {
    // src/styles/*.scss
    return gulp.src('./src/styles/*.scss') // Specify the source path for your Sass files
    .pipe(sass().on('error', sass.logError)) // Compile Sass to CSS
    .pipe(concat('styles.css')) // Concatenate all CSS files into a single file named 'styles.css'
    .pipe(cleanCSS()) // Minify the CSS code
    .pipe(gulp.dest('./dist/css')); // Specify the destination path for the minified CSS file
});

// Default task to run all the defined tasks
gulp.task('default', gulp.parallel('js', 'css'));
