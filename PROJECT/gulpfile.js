/*
	My Gulp.js Template
	Version: 3.0.0beta
	Author: Tiago Porto - http://www.tiagoporto.com
	https://github.com/tiagoporto/my-gulp-template
	Contact: me@tiagoporto.com
*/

/**
	TODO:
	- Sprite de svg
	- Icons
	- Verificar Font features
**/
'use strict';

//************************* Load dependencies ****************************//
var		   gulp = require('gulp'),
   autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
		  cache = require('gulp-cached'),
		 concat = require('gulp-concat'),
		   csso = require('gulp-csso'),
			del = require('del'),
		 gulpif = require('gulp-if'),
	   imagemin = require('gulp-imagemin'),
		 jshint = require('gulp-jshint'),
		  merge = require('merge-stream'),
	 minifyHTML = require('gulp-minify-html'),
		 notify = require('gulp-notify'),
		plumber = require('gulp-plumber'),
		 rename = require('gulp-rename'),
	   sequence = require('run-sequence'),
	spritesmith = require('gulp.spritesmith'),
		stylish = require('jshint-stylish'),
		 stylus = require('gulp-stylus'),
		 uglify = require('gulp-uglify'),
		 useref = require('gulp-useref'),

//***************************** Path configs *****************************//
	basePaths = {
			 src: 'src/',
			dest: 'public/',
			build: './../'
		},

		assetsFolder = {
			images: {
				 src: 'images/',
				dest: 'images/' // If change this directory remember to modify
				                // the variable $image-path in
								// 'src/stylesheets/helpers/_variables.styl'
		},

		sprite: {
			src: 'sprite/'
		},

		scripts: {
			 src: 'scripts/',
			dest: 'js/'
		},

		styles: {
			 src: 'stylesheets/',
			dest: 'css/'
		},

		fonts: {
			dest: 'fonts/' // If change this directory remember to modify
			               // the variable $font-path in
						   // 'src/stylesheets/helpers/_variables.styl'
		}
	},

	paths = {
		images: {
			  src: basePaths.src + assetsFolder.images.src ,
			 dest: basePaths.dest + assetsFolder.images.dest,
			build: basePaths.build + assetsFolder.images.src
		},

		sprite: {
			  src: basePaths.src + assetsFolder.images.src + assetsFolder.sprite.src,
			 dest: basePaths.dest + assetsFolder.images.src + assetsFolder.sprite.src
		},

		scripts: {
			  src: basePaths.src + assetsFolder.scripts.src,
			 dest: basePaths.dest + assetsFolder.scripts.dest,
			build: basePaths.build + assetsFolder.scripts.dest
		},

		styles: {
			  src: basePaths.src + assetsFolder.styles.src,
			 dest: basePaths.dest + assetsFolder.styles.dest,
			build: basePaths.build + assetsFolder.styles.dest
		},

		fonts: {
			build: basePaths.build + assetsFolder.fonts.dest,
			  src: basePaths.dest + assetsFolder.fonts.dest
		}
	}

//******************************** Tasks *********************************//

// Generate Sprite
gulp.task('sprite', function () {
	var sprite = gulp.src(paths.sprite.src + '**/*.png')
					.pipe(
						spritesmith({
							imgName: 'sprite.png',
							cssName: '_sprite.styl',
							imgPath: '../' + assetsFolder.images.dest + 'sprite.png',
							padding: 2,
							algorithmOpts: { sort: false}
						})
					);

	sprite.img
		.pipe(imagemin())
		.pipe(gulp.dest(paths.images.dest));
	sprite.css
		.pipe(gulp.dest(paths.styles.src + 'helpers'))
		.pipe(notify({message: 'Sprite task complete'}));

	return sprite;
});

// Optimize Images
gulp.task('images', function () {
	return	gulp.src([
					paths.images.src + '**/*.{png,jpg,gif,svg}',
					'!' + paths.sprite.src + '**/*'
				])
				.pipe(cache('imagemin'))
				.pipe(imagemin({optimizationLevel: 5, progressive: true}))
				.pipe(gulp.dest(paths.images.dest))
				.pipe(notify({message: 'Images task complete', onLast: true}));
});

// Concatenate Stylus Mixins and Functions
gulp.task('stylus-helpers', function () {
	var mixins = gulp.src(paths.styles.src + 'helpers/mixins/*.styl')
					.pipe(concat('_mixins.styl'))
					.pipe(gulp.dest(paths.styles.src + 'helpers'));

	var functions = gulp.src(paths.styles.src + 'helpers/functions/*.styl')
						.pipe(concat('_functions.styl'))
						.pipe(gulp.dest(paths.styles.src + 'helpers'));

	return merge(mixins, functions);
});

// Compile and Prefix Stylus Styles
gulp.task('styles', function () {
	return	gulp.src([
					paths.styles.src + '*.styl',
					'!' + paths.styles.src + '_*.styl',
				])
				.pipe(plumber())
				.pipe(stylus())
				.pipe(autoprefixer({
					browsers: ['ie >= 8', 'ie_mob >= 10', 'Firefox > 24', 'last 10 Chrome versions', 'safari >= 6', 'opera >= 24', 'ios >= 6',  'android >= 4', 'bb >= 10']
				}))
				.pipe(gulp.dest(paths.styles.dest))
				.pipe(csso())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest(paths.styles.dest))
				.pipe(notify({message: 'Styles task complete', onLast: true}));
});

// Concatenate libs, frameworks, plugins Scripts and Minify
gulp.task('dependence-scripts', function () {
	return	gulp.src([
					paths.scripts.src + 'dependencies/plugins/outdatedbrowser-1.1.0.js',
					paths.scripts.src + 'dependencies/libs/*',
					paths.scripts.src + 'dependencies/frameworks/*',
					paths.scripts.src + 'dependencies/plugins/**'
				])
				.pipe(concat('dependencies.js'))
				.pipe(gulp.dest(paths.scripts.dest))
				.pipe(rename('dependencies.min.js'))
				.pipe(uglify())
				.pipe(gulp.dest(paths.scripts.dest));
});

// Concatenate and Minify Main Scripts
gulp.task('scripts', function () {
	var concatenate = gulp.src([
							'!' + paths.scripts.src + '**/_*.js',
							paths.scripts.src + 'settings/outdatedbrowser.js',
							paths.scripts.src + 'settings/*.js',
							paths.scripts.src + '*.js',
							paths.scripts.src + 'jquery/onread/open_onread.js',
							paths.scripts.src + 'jquery/*',
							paths.scripts.src + 'jquery/onread/close_onread.js',
							paths.scripts.src + 'angular/**',
							paths.scripts.src + 'settings/google_analytics.js'
						])
						.pipe(plumber())
						.pipe(concat('main.js'))
						.pipe(jshint())
						.pipe(jshint.reporter('jshint-stylish'))
						.pipe(gulp.dest(paths.scripts.dest))
						.pipe(rename({suffix: ".min"}))
						.pipe(uglify())
						// Required to minify angularjs scripts
						// .pipe(uglify({mangle: false}))
						.pipe(gulp.dest(paths.scripts.dest));

	var copy = gulp.src([
						paths.scripts.src + 'angular/_*.js',
						paths.scripts.src + 'jquery/_*.js',
						paths.scripts.src + '/_*.js'
					])
					.pipe(jshint())
					.pipe(jshint.reporter('jshint-stylish'))
					.pipe(rename(function(path){
						path.basename = path.basename.substring(1)
					}))
					.pipe(gulp.dest(paths.scripts.dest))
					.pipe(uglify())
					.pipe(rename({suffix: ".min"}))
					.pipe(gulp.dest(paths.scripts.dest));

	return merge(concatenate, copy);
});

// Copy Files to Build
gulp.task('copy', function () {
	var assets = useref.assets();

	// Minify and Copy HTML
	var html  =	gulp.src(basePaths.dest + '**/*.{html,php}')
					.pipe(assets)
					.pipe(gulpif('*.js', uglify()))
					.pipe(gulpif('*.css', csso()))
					.pipe(assets.restore())
					.pipe(useref())
					.pipe(gulpif('*.html', minifyHTML({spare:true, empty: true})))
					.pipe(gulpif('*.php', minifyHTML({spare:true, empty: true})))
					// .pipe(minifyHTML({spare:true, empty: true}))
					.pipe(gulp.dest(basePaths.build));

	// Copy All Other files except HTML, PHP, CSS e JS Files
	var AllFiles  =	gulp.src([
							basePaths.dest + '**/*',
							'!' + paths.styles.dest + '**/*',
							'!' + paths.scripts.dest + '**/*',
							'!' + basePaths.dest + '**/*.{html,php}'
						], {dot: true})
						.pipe(gulp.dest(basePaths.build));
});

//================= Utility Tasks =================//

// Clean Directories
gulp.task('clean', function (cb) {
	del([
		paths.styles.dest,
		paths.scripts.dest,
		paths.images.dest
		], cb)
});

// Watch
gulp.task('watch', function () {
	browserSync({
		notify: false,
		port: 80,
		logPrefix: 'BrowserSync',
		// To use with dinamic files
		// proxy: "localhost/my-gulp-template/public/"
		server: {
			baseDir: [basePaths.src, basePaths.dest]
		}
	});

	// Watch .jpg .png .gif and .svg files
	gulp.watch([paths.images.src + '**/*.{png,jpg,gif,svg}', '!' + paths.sprite.src + '**/*'], ['images', browserSync.reload]);

	// Watch sprite file
	gulp.watch(paths.sprite.src + '**/*.{png,jpg,gif}', ['sprite', browserSync.reload]);

	// Watch .js files
	gulp.watch([paths.scripts.src + '**/*.js', '!' + paths.scripts.src + 'dependencies/**/*.js'], ['scripts', browserSync.reload]);

	// Watch dependencies .js files
	gulp.watch(paths.scripts.src + 'dependencies/**/*.js', ['dependence-scripts', browserSync.reload]);

	// Watch .styl files
	gulp.watch([paths.styles.src + '**/*.styl', '!' + paths.styles.src + 'helpers/mixins/*.styl', '!' + paths.styles.src + 'helpers/functions/*.styl'], ['styles', browserSync.reload]);

	// Watch .styl Helpers and Functions files
	gulp.watch([paths.styles.src + 'helpers/mixins/*.styl', paths.styles.src + 'helpers/functions/*.styl'], ['stylus-helpers']);

	//Watch .html and .php Files
	gulp.watch(basePaths.dest + '**/*.{html,php}', browserSync.reload);
});

//================= Main Tasks =================//
// Compile, watch and serve project
gulp.task('default', ['clean'], function (cb) {
	sequence(['images', 'sprite', 'stylus-helpers', 'dependence-scripts'], 'styles', 'scripts', 'watch',  cb);
});

// Compile project
gulp.task('compile', ['clean'], function (cb) {
	sequence(['images', 'sprite', 'stylus-helpers', 'dependence-scripts'], 'styles', 'scripts', cb);
});

// Build Project
gulp.task('build', ['clean'], function (cb) {
	sequence(['images', 'sprite'], 'stylus-helpers', 'styles', 'dependence-scripts', 'scripts', 'copy', cb);
});

// Build and serve Builded Project
gulp.task('build:serve', ['build'], function (cb) {
	browserSync({
		notify: false,
		port: 80,
		logPrefix: 'BrowserSync',
		// proxy: "localhost/my-gulp-template/public/"
		server: {
			baseDir: [basePaths.build]
		}
	});
});
