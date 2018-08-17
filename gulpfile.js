const gulp = require('gulp');
const sass = require('gulp-sass');
const pug  = require('gulp-pug');
const bs   = require('browser-sync');

gulp.task('styles', done =>
	gulp.src('src/styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(bs.stream())
);

gulp.task('views', done =>
	gulp.src('src/views/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'))
		//.pipe(bs.reload())
);

gulp.task('dev', gulp.parallel('styles', 'views', done => {
	bs.init({
		server: { baseDir: './', },
		port: 3000
	});

	gulp.watch('src/styles/**/*.scss', gulp.parallel('styles'));
	gulp.watch('src/views/**/*.pug', gulp.parallel('views')).on('change', bs.reload);
}));