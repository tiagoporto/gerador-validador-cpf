// Concatenate Sass Mixins and Functions
module.exports = function (gulp, plugins, paths, merge) {
    return function () {
		   var mixins = gulp.src(paths.styles.src + 'helpers/mixins/*.scss')
							.pipe(plugins.concat('_mixins.scss'))
							.pipe(gulp.dest(paths.styles.src + 'helpers'));

		var functions = gulp.src(paths.styles.src + 'helpers/functions/*.scss')
							.pipe(plugins.concat('_functions.scss'))
							.pipe(gulp.dest(paths.styles.src + 'helpers'));

		return merge(mixins, functions);
	};
};