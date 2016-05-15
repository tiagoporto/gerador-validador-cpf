// Compile and Prefix Stylus
module.exports = function (gulp, plugins, paths, headerProject, autoprefixerBrowsers, lintCSS) {
    return function () {

		return	gulp.src([
						paths.styles.src + '*.styl',
						'!' + paths.styles.src + '{index,_*}.styl'
					])
					.pipe(plugins.plumber())
					.pipe(plugins.stylus({
							'include css': true
							//,use:[koutoSwiss(), rupture()]
						})
						.on('error', function (err) {

							console.log(err.message);

							// If rename the stylus file change here
							plugins.file('styles.css', 'body:before{white-space: pre; font-family: monospace; content: "' + err.message + '";}', { src: true })
								.pipe(plugins.replace("\\",'/'))
								.pipe(plugins.replace(/\n/gm,'\\A '))
								.pipe(plugins.replace("\"",'\''))
								.pipe(plugins.replace("content: '",'content: "'))
								.pipe(plugins.replace("';}",'";}'))
								.pipe(gulp.dest(paths.styles.dest))
								.pipe(plugins.rename({suffix: '.min'}))
								.pipe(gulp.dest(paths.styles.dest));
						})
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
