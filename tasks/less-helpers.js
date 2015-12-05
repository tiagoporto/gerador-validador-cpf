// Concatenate Less Mixins and Functions
module.exports = function (gulp, plugins, paths, merge) {
    return function () {
		   var mixins = gulp.src(paths.styles.src + 'helpers/mixins/*.less')
							.pipe(plugins.concat('_mixins.less'))
							.pipe(gulp.dest(paths.styles.src + 'helpers'));

		var functions = gulp.src(paths.styles.src + 'helpers/functions/*.less')
							.pipe(plugins.concat('_functions.less'))
							.pipe(gulp.dest(paths.styles.src + 'helpers'));

		return merge(mixins, functions);
	};
};