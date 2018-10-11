const gulp    = require('gulp');
const sass    = require('gulp-sass');
const pug     = require('gulp-pug');
const bs      = require('browser-sync');
const version = require('gulp-version-number');

gulp.task('styles', done =>
	gulp.src('src/styles/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('dist/css'))
		.pipe(bs.stream())
);

gulp.task('views', done =>
	gulp.src('src/views/*.pug')
		.pipe(pug())
		.pipe(version({
			value: '%MDS%',
			append: {
				'key': 'v',
				'to': ['css', 'js'],
			}
		}))
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