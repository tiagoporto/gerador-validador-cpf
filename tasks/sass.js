// Compile and Prefix Sass
module.exports = function (gulp, plugins, paths, headerProject, autoprefixerBrowsers, lintCSS) {
    return function () {
		return gulp.src(paths.styles.src + 'styles.scss')
					.pipe(plugins.plumber())
					.pipe(plugins.sass({precision: 3, outputStyle: 'expanded'})
						.on('error', plugins.sass.logError)
					)
					.pipe(plugins.autoprefixer({
						browsers: autoprefixerBrowsers
					}))
					.pipe(plugins.wrapper({
						header: headerProject + '\n'
					}))
					.pipe(plugins.if(lintCSS, plugins.csslint('./.csslintrc')))
					.pipe(plugins.if(lintCSS, plugins.csslint.reporter()))
					.pipe(gulp.dest(paths.styles.dest))
					.pipe(plugins.csso())
					.pipe(plugins.rename({suffix: '.min'}))
					.pipe(gulp.dest(paths.styles.dest))
					.pipe(plugins.notify({message: 'Styles task complete', onLast: true}));
	};
};
