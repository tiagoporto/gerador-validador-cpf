/*
*	Swill Boilerplate v4.1.0beta
*	https://github.com/tiagoporto/swill-boilerplate
*	Copyright (c) 2014-2015 Tiago Porto (http://tiagoporto.com)
*	Released under the MIT license
*/

'use strict';

var		 gulp = require('gulp'),
  browserSync = require('browser-sync'),
		  del = require('del'),
		   fs = require('fs'),
		merge = require('merge-stream'),
   minifyHTML = require('gulp-minify-html'),
	 sequence = require('run-sequence'),
		 sass = require('gulp-ruby-sass'),
	  rupture = require('rupture'),
  spritesmith = require('gulp.spritesmith'),
	svgSprite = require('gulp-svg-sprite'),
	  stylish = require('jshint-stylish'),
		 args = require('yargs').argv,
	  plugins = require('gulp-load-plugins')(),
   	   buffer = require('vinyl-buffer'),
   vinylPaths = require('vinyl-paths'),
	  ghPages = require('gulp-gh-pages'),
	  Karma = require('karma').Server,
	  jasmine = require('gulp-jasmine'),
	   config = require('./config.json'),

//***************************** Path configs *****************************//

basePaths = config.basePaths,

paths = {
		images: {
			  src: basePaths.src + basePaths.images.src ,
			 dest: basePaths.dest + basePaths.images.dest,
			build: basePaths.build + basePaths.images.src
		},

		sprite: {
			src: basePaths.src + basePaths.images.src + basePaths.sprite.src
		},

		scripts: {
			  src: basePaths.src + basePaths.scripts.src,
			 dest: basePaths.dest + basePaths.scripts.dest,
			build: basePaths.build + basePaths.scripts.dest
		},

		styles: {
			  src: basePaths.src + basePaths.styles.src,
			 dest: basePaths.dest + basePaths.styles.dest,
			build: basePaths.build + basePaths.styles.dest
		}
	},

//******************************* Settings *******************************//
	 argProcessor = '',
	 preprocessor = 'stylus',
   extensionStyle = '',
	headerProject = fs.readFileSync(basePaths.src + "header-comments.txt", "utf8")

	if(preprocessor === "sass"){
		extensionStyle = "scss";
	}else if(preprocessor === "stylus"){
		extensionStyle = "styl";
	}else if(preprocessor === "less"){
		extensionStyle = preprocessor;
	}


//******************************** Tasks *********************************//

gulp.task('test', function (done) {
  new Karma({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});


gulp.task('styles-helpers', require('./tasks/' + preprocessor + '-helpers')(gulp, plugins, paths, merge));

gulp.task('styles', require('./tasks/' + preprocessor)(gulp, plugins, paths, headerProject, config.autoprefixerBrowsers, config.lintCSS, rupture));

// Generate Bitmap Sprite
gulp.task('bitmap-sprite', function () {
	var sprite = gulp.src(paths.sprite.src + '**/*.png')
					.pipe(plugins.plumber())
					.pipe(
						spritesmith({
							imgName: 'bitmap-sprite.png',
							cssName: "_bitmap-sprite." + extensionStyle,
							imgPath: '../' + basePaths.images.dest + 'bitmap-sprite.png',
							padding: 2,
							algorithm: 'top-down'
						})
					);

	sprite.img
		.pipe(buffer())
		.pipe(plugins.imagemin())
		.pipe(gulp.dest(paths.images.dest));
	sprite.css
		.pipe(gulp.dest(paths.styles.src + 'helpers'))
		.pipe(plugins.notify({message: 'Bitmap sprite task complete', onLast: true}));

	return sprite;
});

// Generate SVG Sprite
gulp.task('vetor-sprite', function() {
	var spriteOptions = {
					shape : {
						spacing : {
							padding : 2
						}
					},
					mode : {
						css : {
							dest : './',
							sprite: '../' + basePaths.images.dest + 'vetor-sprite.svg',
							layout: 'vertical',
							bust : false,
							render : {}
						},
					}
				};

	spriteOptions.mode.css.render[extensionStyle] =  {};

	spriteOptions.mode.css.render[extensionStyle].dest =  '../../' + paths.styles.src + 'helpers/_vetor-sprite.' + extensionStyle;

	return gulp.src(paths.sprite.src + '*.svg')
				.pipe(plugins.plumber())
				.pipe(svgSprite(spriteOptions))
				.pipe(gulp.dest(paths.images.dest))
				.pipe(plugins.notify({message: 'SVG sprite task complete', onLast: true}));
});

//Fallback convert SVG to PNG
gulp.task('svg2png', function () {
	return gulp.src(paths.images.dest + 'vetor-sprite.svg')
				.pipe(plugins.plumber())
				.pipe(plugins.svg2png())
				.pipe(gulp.dest(paths.images.dest));
});

// Optimize Images
gulp.task('images', function () {
	var images = gulp.src([
					paths.images.src + '**/*.{bmp,gif,jpg,jpeg,png,svg}',
					'!' + paths.sprite.src + '**/*',
				])
				.pipe(plugins.plumber())
				.pipe(plugins.newer(paths.images.dest))
				.pipe(plugins.imagemin({optimizationLevel: 5, progressive: true}))
				.pipe(gulp.dest(paths.images.dest));

	var svg = gulp.src([
					paths.images.src + '**/*.svg',
					'!' + paths.sprite.src + '**/*'
				])
				.pipe(plugins.plumber())
				.pipe(plugins.newer(paths.images.dest))
				.pipe(plugins.svg2png())
				.pipe(gulp.dest(paths.images.dest))
				.pipe(plugins.notify({message: 'Images task complete', onLast: true}));

	return merge(images, svg)
});


// Concatenate vendor scripts and Minify
gulp.task('vendor-scripts', function () {
	return gulp.src([
					'!' + paths.scripts.src + '**/*_IGNORE.js',
					paths.scripts.src + 'settings/google_analytics.js',
					paths.scripts.src + 'vendor/frameworks_libs/*',
					paths.scripts.src + 'vendor/plugins/**',
					paths.scripts.src + 'settings/*.js'
				])
				.pipe(plugins.plumber())
				.pipe(plugins.concat('vendors.js'))
				.pipe(gulp.dest(paths.scripts.dest))
				.pipe(plugins.rename('vendors.min.js'))
				.pipe(plugins.uglify())
				.pipe(gulp.dest(paths.scripts.dest));
});

// Concatenate and Minify Main Scripts
gulp.task('scripts', function () {
	var concatenate = gulp.src([
							'!' + paths.scripts.src + '**/*_SEPARATE.js',
							'!' + paths.scripts.src + '**/*_IGNORE.js',
							paths.scripts.src + '*.js'
						])
						.pipe(plugins.plumber())
						.pipe(plugins.cached('scripts'))
						.pipe(plugins.remember('scripts'))
						.pipe(plugins.plumber())
						.pipe(plugins.if(config.lintJS, plugins.jshint()))
						.pipe(plugins.if(config.lintJS, plugins.jshint.reporter('jshint-stylish')))
						.pipe(plugins.concat('scripts.js'))
						.pipe( plugins.if(
							config.jquery,
							plugins.wrapper({
								header: 'jQuery(document).ready(function($) {\n\n',
								footer: '\n});'
							})
						))
						.pipe(plugins.wrapper({
							header: headerProject
						}))
						.pipe(gulp.dest(paths.scripts.dest))
						.pipe(plugins.rename({suffix: '.min'}))
						.pipe(plugins.uglify())
						.pipe(gulp.dest(paths.scripts.dest));


		   var copy = gulp.src([
							paths.scripts.src + '/*_SEPARATE.js'
						])
						.pipe(plugins.plumber())
						.pipe(plugins.newer(paths.scripts.dest))
						.pipe(plugins.plumber())
						.pipe(plugins.if(config.lintJS, plugins.jshint()))
						.pipe(plugins.if(config.lintJS, plugins.jshint.reporter('jshint-stylish')))
						.pipe(plugins.rename(function(path){
							path.basename = path.basename.substring(0,  path.basename.length -9)
						}))
						.pipe(gulp.dest(paths.scripts.dest))
						.pipe(plugins.rename({suffix: '.min'}))
						.pipe(plugins.uglify({
							preserveComments: 'some'
						}))
						.pipe(gulp.dest(paths.scripts.dest))
						.pipe(plugins.notify({message: 'Scripts task complete', onLast: true}));

	return merge(concatenate, copy);
});

// Copy Files to Build
gulp.task('copy', function () {
	var  assets  = {searchPath: basePaths.dest};

	// Minify and Copy HTML
	var  html    = gulp.src([
						basePaths.dest + '**/*.{html,php}',
						'!public/bower_components{,/**}'
					])
						.pipe(plugins.useref(assets))
						.pipe(plugins.if('*.js', plugins.uglify()))
						.pipe(plugins.if('*.css', plugins.csso()))
						.pipe(plugins.if('*.html', minifyHTML({spare:true, empty: true})))
						.pipe(plugins.if('*.php', minifyHTML({spare:true, empty: true})))
						.pipe(gulp.dest(basePaths.build));

	// Copy All Other files except HTML, PHP, CSS e JS Files
	var allFiles = gulp.src([
							'!public/bower_components{,/**}',
							basePaths.dest + '**/*',
							'!' + paths.styles.dest + '**/*',
							'!' + paths.scripts.dest + '**/*',
							'!' + basePaths.dest + '**/*.{html,php}'
						], {dot: true})
						.pipe(gulp.dest(basePaths.build));
});

// Copy Bower dependencies to public folder
gulp.task('bower', function() {
	var outdatedBrowserLangs = gulp.src(basePaths.bower + '/outdated-browser/outdatedbrowser/lang/*')
									.pipe(gulp.dest(basePaths.dest + 'lang/outdated_browser'));

	var    fonts    = gulp.src([
							basePaths.bower + '/bootstrap/dist/fonts/*',
							basePaths.bower + '/font-awesome/fonts/*'
						])
						.pipe(gulp.dest(basePaths.dest + 'fonts'));

	return merge(outdatedBrowserLangs, fonts);
});

gulp.task('get-preprocessor', function(){
	if(args.sass == true){
		argProcessor = 'sass';
	}else if(args.stylus == true){
		argProcessor = 'stylus';
	}else if(args.less == true){
		argProcessor = 'less';
	}
});

//Set the preprocessor in variable
gulp.task('set-preprocessor', function(){
	if(args.sass || args.less || args.stylus){
		return gulp.src(['gulpfile.js'])
			.pipe(plugins.replace(/preprocessor\s=\s'[a-z]{4,6}/g, "preprocessor = \'" + argProcessor))
			.pipe(gulp.dest('./'));
	}
});

//Copy the files to use
gulp.task('folder-preprocessor', function(){
	if(args.sass || args.less || args.stylus){
		return gulp.src(paths.styles.src + argProcessor + "/**/*")
			.pipe(gulp.dest(paths.styles.src));
	}
});

//Removes unnecessary folders
gulp.task('remove-preprocessors', function(cb){
	if(args.sass || args.less || args.stylus){
		del([
			paths.styles.src + "sass",
			paths.styles.src + "stylus",
			paths.styles.src + "less"
			], cb)
	}
});

//Set the use of components
gulp.task('set-dependencies', function(){
	if(config.components){
		var component_script = gulp.src(paths.scripts.src + '**/custom-input-file_IGNORE.js')
								.pipe(vinylPaths(del))
								.pipe(plugins.rename(function(path){
										path.basename = path.basename.substring(0,  path.basename.length -7)
									}))
								.pipe(gulp.dest(paths.scripts.src));
	}

	if(config.jquery){
		var jquery_indexcalls = gulp.src(basePaths.dest + 'index.html')
									.pipe(plugins.replace(
											/<!-- (<link rel="stylesheet" href="jquery-logo-downloadtip\/css\/jquery-logo-downloadtip.css">) -->/g, '$1'))
									.pipe(plugins.replace(
										/<!-- (<script src="jquery\/dist\/jquery.js"><\/script>) -->/g, '$1'))
									.pipe(plugins.replace(
										/<!-- (<script src="jquery-logo-downloadtip\/js\/jquery-logo-downloadtip.min.js"><\/script>) -->/g,  '$1'))
									.pipe(gulp.dest(basePaths.dest));

		var jquery_jscalls = gulp.src(paths.scripts.src + '**/call_plugins.js')
									.pipe(plugins.replace(/\/\/,/g, ","))
									.pipe(plugins.replace(/\/\/\$\('#logo'\)/g, "$('#logo')"))
									.pipe(gulp.dest(paths.scripts.src));

		var jquery_jshint = gulp.src('./.jshintrc')
								.pipe(plugins.replace(/jquery"[\s]{1,10}:\sfalse/g, 'jquery"        : true'))
								.pipe(gulp.dest('./'));
	}
});

//*************************** Utility Tasks ******************************//

gulp.task('setup', function(cb){
	sequence('bower',  'get-preprocessor', 'set-preprocessor', 'folder-preprocessor', 'remove-preprocessors', 'set-dependencies', cb);
});

gulp.task('combine-assets', function () {
	var assets   =  {searchPath: basePaths.dest};

	// Minify and Copy HTML
	return  gulp.src(basePaths.dest + '**/*.{html,php}')
					.pipe(plugins.useref(assets))
					.pipe(plugins.if('*.js', plugins.uglify()))
					.pipe(plugins.if('*.css', plugins.csso()))
					.pipe(gulp.dest(basePaths.dest));
});

// Clean Directories
gulp.task('clean', function (cb) {
	return del([
			basePaths.build,
			paths.styles.dest,
			paths.scripts.dest,
			paths.styles.src + 'helpers/_bitmap-sprite.{styl,scss,less}',
			paths.styles.src + 'helpers/_vetor-sprite.{styl,scss,less}',
			paths.images.dest + '**/*',
			// Add here the folders that will not be deleted in public/img
			'!' + paths.images.dest + 'copyright{,**/*{,**/*}}',
			'!' + paths.images.dest + 'logos{,**/*{,**/*}}'
		], cb)
});

//***************************** Main Tasks *******************************//

// Serve the project and watch
gulp.task('serve', function () {
	browserSync(config.browserSync);

	gulp.watch([
				paths.images.src + '**/*.{bmp,gif,jpg,jpeg,png,svg}',
				'!' + paths.sprite.src + '**/*'
			],

			['images', browserSync.reload]
		 );

	gulp.watch(
			paths.sprite.src + '**/*.{png,gif}',

			['bitmap-sprite', browserSync.reload]
		);

	gulp.watch(
			paths.sprite.src + '**/*.svg',

			['vetor-sprite', 'styles', browserSync.reload]
		);

	gulp.watch(
			paths.images.dest + 'vetor-sprite.svg',

			['svg2png', browserSync.reload]
		);

	gulp.watch(
			paths.scripts.src + '*.js',

			['scripts', browserSync.reload]
		);

	gulp.watch([
				paths.scripts.src + 'vendor/**/*.js',
				paths.scripts.src + 'settings/**/*.js'
			],

			['vendor-scripts', browserSync.reload]
		);

	gulp.watch([
			paths.styles.src + '**/*.{styl,scss,sass,less}',
			'!' + paths.styles.src + 'helpers/mixins/*.{styl,scss,sass,less}',
			'!' + paths.styles.src + 'helpers/functions/*.{styl,scss,sass,less}'],

			['styles', browserSync.reload]
		);

	gulp.watch([
			paths.styles.src + 'helpers/mixins/*.{styl,scss,sass,less}',
			paths.styles.src + 'helpers/functions/*.{styl,scss,sass,less}'],

			['styles-helpers']
		);

	gulp.watch(basePaths.dest + '**/*.{html,php}', browserSync.reload);
});

// Compile, watch and serve project
gulp.task('default', function () {
	if(args.compile === true){
		sequence('clean', ['images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'styles', 'scripts', 'serve');

	}else{
		gulp.start('serve');
	}
});
gulp.task('gh', function() {
  return gulp.src( basePaths.build + '**/*')
    .pipe(ghPages());
});

gulp.task('ghpages', function() {
	sequence(['images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'styles', 'scripts', 'copy', 'gh');
});

// Build Project and serve if pass the parameter --serve
gulp.task('build', ['clean'], function () {
	sequence(['images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'styles', 'scripts', 'copy', function(){
			if(args.serve === true){
				browserSync(config.browserSyncBuild);
			}
		});
});