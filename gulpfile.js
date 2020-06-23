const { src, dest, watch, parallel } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('gulp-pxtorem');
const sass = require('gulp-sass');
const mqpacker = require('css-mqpacker');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sassGlob = require('gulp-sass-glob');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync').create();

const compileSass = (done) => {
  src('src/scss/layout/**/*.scss')
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(sassGlob())
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(pxtorem())
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
          cascade: false,
        }),
      ])
    )
    .pipe(postcss([mqpacker()]))
    .pipe(dest('dist/css'));
  done();
};

const taskBabel = (done) => {
  src('src/js/**/*.js')
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'));
  done();
};

const taskImagemin = () =>
  src('src/images/*')
    .pipe(plumber())
    .pipe(
      imagemin([
        pngquant({
          quality: [0.65, 0.8],
          speed: 1,
        }),
        mozjpeg({
          quality: 80,
        }),
        imagemin.gifsicle({
          interlaced: false,
        }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(rename({ suffix: '_min' }))
    .pipe(dest('dist/images'));

const serve = (done) => {
  browserSync.init({
    files: [
      './**/**/*.html',
      './**/**/*.css',
      './**/**/*.js',
      './**/**/*.png',
      './**/**/*.gif',
      './**/**/*.jpg',
    ],
    server: {
      baseDir: 'dist/',
      index: 'index.html',
    },
    startPath: 'index.html',
    notify: false,
    open: 'external',
    host: '192.168.1.18',
  });
  done();
};

const watchFiles = (done) => {
  watch('src/scss/**/*.scss', compileSass);
  watch('src/js/**/*.js', taskBabel);
  watch('src/images/*', taskImagemin);
  done();
};

exports.default = parallel(serve, watchFiles);
exports.compile = compileSass;
exports.babel = taskBabel;
