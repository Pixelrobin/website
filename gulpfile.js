const gulp    = require('gulp');
const sass    = require('gulp-sass');
const pug     = require('gulp-pug');
const bs      = require('browser-sync');
const version = require('gulp-version-number');
const newer   = require('gulp-newer');
const del     = require('del');

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
		.pipe(gulp.dest('dist/'))
);

gulp.task('media', done =>
	gulp.src('media/**/*')
		.pipe(newer('dist/media/'))
		.pipe(gulp.dest('dist/media'))
);

gulp.task('root', done =>
	gulp.src('src/root/**/*')
		.pipe(newer('dist/'))
		.pipe(gulp.dest('dist/'))
);

gulp.task('clean', done =>
	del('dist/**/*')
);

gulp.task('dev', gulp.parallel('styles', 'views', 'media', 'root', done => {
	bs.init({
		server: { baseDir: './dist/', },
		port: 3000
	});

	gulp.watch('src/styles/**/*.scss', gulp.parallel('styles'));
	gulp.watch('src/views/**/*.pug', gulp.parallel('views')).on('change', bs.reload);
	gulp.watch('src/root/**/*', gulp.parallel('root')).on('change', bs.reload);
	gulp.watch('media/**/*', gulp.parallel('media')).on('change', bs.reload);
}));

gulp.task('build', gulp.parallel('clean', 'styles', 'views', 'media', 'root'));