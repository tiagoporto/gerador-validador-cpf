// Concatenate Stylus Mixins and Functions
module.exports = function (gulp, plugins, paths, merge) {
    return function () {
		   var mixins = gulp.src(paths.styles.src + 'helpers/mixins/*.styl')
							.pipe(plugins.concat('_mixins.styl'))
							.pipe(gulp.dest(paths.styles.src + 'helpers'));

		var functions = gulp.src(paths.styles.src + 'helpers/functions/*.styl')
							.pipe(plugins.concat('_functions.styl'))
							.pipe(gulp.dest(paths.styles.src + 'helpers'));

		return merge(mixins, functions);
	};
};