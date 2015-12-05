// Compile and Prefix Less
module.exports = function (gulp, plugins, paths, headerProject, autoprefixerBrowsers, lintCSS) {
    return function () {
		return gulp.src(paths.styles.src + '**/*.less')
			.pipe(plugins.less())
			.pipe(plugins.autoprefixer({
					browsers: autoprefixerBrowsers
			}))
			.pipe(plugins.wrapper({
				header: headerProject
			}))
			.pipe(plugins.if(lintCSS, plugins.csslint('./.csslintrc')))
			.pipe(plugins.if(lintCSS, plugins.csslint.reporter()))
			.pipe(gulp.dest(paths.styles.dest))
			.pipe(plugins.csso())
			.pipe(plugins.rename({suffix: '.min'}))
			.pipe(gulp.dest(paths.styles.dest))
			.pipe(plugins.notify({message: 'Styles task complete', onLast: true}))
	};
};