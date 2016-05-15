/*
* Swill Boilerplate v4.4.0
* https://github.com/tiagoporto/swill-boilerplate
* Copyright (c) 2014-2016 Tiago Porto (http://tiagoporto.com)
* Released under the MIT license
*/

/*eslint-env node */
/*eslint strict: ["error", "global"]*/
'use strict';

var args = require('yargs').argv,
    browserSync = require('browser-sync'),
    buffer = require('vinyl-buffer'),
    config = require('./config.json'),
    del = require('del'),
    fs = require('fs'),
    ghPages = require('gulp-gh-pages'),
    gulp = require('gulp'),
    handlebars = require('gulp-hb'),
    // jasmine = require('gulp-jasmine'),
    Karma = require('karma').Server,
    merge = require('merge-stream'),
    plugins = require('gulp-load-plugins')(),
    sequence = require('run-sequence'),
    spritesmith = require('gulp.spritesmith'),
    svgSprite = require('gulp-svg-sprite'),

    //***************************** Path configs *****************************//

    basePaths = config.basePaths,

    paths = {
        html: {
            src: basePaths.src + basePaths.handlebars.src
        },

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

    env = (args.prod) ? 'prod' : 'dev',
    argProcessor = '',
    preprocessor = 'stylus',
    extensionStyle = '',
    headerProject = fs.readFileSync(basePaths.src + 'header-comments.txt', 'utf8');

(preprocessor === 'sass') && (extensionStyle = 'scss');
(preprocessor === 'stylus') && (extensionStyle = 'styl');

//******************************** Tasks *********************************//

gulp.task('coverall', function(){
    gulp.src('coverage/**/lcov.info')
        .pipe(plugins.coveralls());
});

gulp.task('karma', function(done) {
    new Karma({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('test', function(){
    sequence('karma', 'coverall');
});

gulp.task('handlebars', function () {
    return gulp
        .src(paths.html.src + '**/*.html')
        .pipe(handlebars({
            partials: paths.html.src + basePaths.handlebars.partials.src + '**/*.hbs'
        }))
        .pipe(gulp.dest(basePaths.dest));
});

gulp.task('svg-inline', function () {
    if(config.inlineSVG){
        return gulp.src(basePaths.dest + '**/*.html')
            .pipe(plugins.inline({
                base: './',
                disabledTypes: ['css', 'js']
            }))
            .pipe(gulp.dest(basePaths.dest));
    }
});

gulp.task('styles-helpers', function(){
    var mixins = gulp.src(paths.styles.src + 'helpers/mixins/*.{styl,scss}')
                    .pipe(plugins.concat('_mixins.styl'))
                    .pipe(gulp.dest(paths.styles.src + 'helpers'));

    var functions = gulp.src(paths.styles.src + 'helpers/functions/*.{styl,scss}')
                        .pipe(plugins.concat('_functions.styl'))
                        .pipe(gulp.dest(paths.styles.src + 'helpers'));

    return merge(mixins, functions);
});

gulp.task('styles', require('./tasks/' + preprocessor)(gulp, plugins, paths, headerProject, config.autoprefixerBrowsers, config.lintCSS));

// Generate Bitmap Sprite
gulp.task('bitmap-sprite', function() {
    var sprite = gulp.src(paths.sprite.src + '**/*.png')
                    .pipe(plugins.plumber())
                    .pipe(
                        spritesmith({
                            imgName: 'bitmap-sprite.png',
                            cssName: '_bitmap-sprite.' + extensionStyle,
                            cssOpts: {
                                cssSelector: function(item) {
                                    if (item.name.indexOf('~hover') !== -1) {
                                        return '.icon-' + item.name.replace('~hover', ':hover');
                                    } else {
                                        return '.icon-' + item.name;
                                    }
                                }
                            },
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
        shape: {
            spacing: { padding: 2 }
        },
        mode : {
            css : {
                prefix: '.icon-%s',
                dest: './',
                sprite: '../' + basePaths.images.dest + 'vetor-sprite.svg',
                layout: 'vertical',
                bust: false,
                render: {}
            }
        }
    };

    spriteOptions.mode.css.render[extensionStyle] = {};

    spriteOptions.mode.css.render[extensionStyle].dest = '../../' + paths.styles.src + 'helpers/_vetor-sprite.' + extensionStyle;

    return gulp.src(paths.sprite.src + '*.svg')
                .pipe(plugins.plumber())
                .pipe(svgSprite(spriteOptions))
                .pipe(gulp.dest(paths.images.dest))
                .pipe(plugins.notify({message: 'SVG sprite task complete', onLast: true}));
});

//Fallback convert SVG to PNG
gulp.task('svg2png', function() {
    return gulp.src(paths.images.dest + 'vetor-sprite.svg')
                .pipe(plugins.plumber())
                .pipe(plugins.svg2png())
                .pipe(gulp.dest(paths.images.dest));
});

// Optimize Images
gulp.task('images', function() {
    var images = gulp.src([
                            paths.images.src + '**/*.{bmp,gif,jpg,jpeg,png,svg}',
                            '!' + paths.sprite.src + '**/*'
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

    return merge(images, svg);
});


// Concatenate vendor scripts and Minify
gulp.task('vendor-scripts', function() {
    var envProd = (env === 'prod') ? '' : '!';

    return gulp.src([
                        '!' + paths.scripts.src + '**/*{_SEPARATE,_IGNORE}.js',
                        paths.scripts.src + 'settings/*.js',
                        envProd + paths.scripts.src + 'settings/google_analytics.js'
                    ])
                    .pipe(plugins.plumber())
                    .pipe(plugins.concat('vendors.js'))
                    .pipe(gulp.dest(paths.scripts.dest))
                    .pipe(plugins.rename('vendors.min.js'))
                    .pipe(plugins.uglify())
                    .pipe(gulp.dest(paths.scripts.dest));
});

// Concatenate and Minify Main Scripts
gulp.task('scripts', function() {
    var babelOption = { presets: ['es2015'] };
    var headerWrapper = { header: headerProject + '\n' };
    var jQueryWrapper = {
                            header: 'jQuery(document).ready(function($) {\n\n',
                            footer: '\n});'
                        };

    var concatenate = gulp.src([
                                '!' + paths.scripts.src + '**/*{_SEPARATE,_IGNORE}.js',
                                paths.scripts.src + '*.js'
                            ])
                            .pipe(plugins.plumber())
                            .pipe(plugins.cached('scripts'))
                            .pipe(plugins.remember('scripts'))
                            .pipe(plugins.plumber())
                            .pipe( plugins.if(config.lintJS, plugins.eslint()) )
                            .pipe( plugins.if(config.lintJS, plugins.eslint.format()) )
                            .pipe(plugins.concat('scripts.js'))
                            .pipe( plugins.if(config.es6, plugins.babel(babelOption)) )
                            .pipe( plugins.if(config.jQuery, plugins.wrapper(jQueryWrapper)) )
                            .pipe(plugins.wrapper(headerWrapper))
                            .pipe(gulp.dest(paths.scripts.dest))
                            .pipe(plugins.rename({suffix: '.min'}))
                            .pipe(plugins.uglify())
                            .pipe(gulp.dest(paths.scripts.dest));

    var copy = gulp.src(paths.scripts.src + '/**/*_SEPARATE.js')
                    .pipe(plugins.plumber())
                    .pipe(plugins.newer(paths.scripts.dest))
                    .pipe(plugins.plumber())
                    .pipe( plugins.if(config.lintJS, plugins.eslint()) )
                    .pipe( plugins.if(config.lintJS, plugins.eslint.format()) )
                    .pipe(plugins.rename(function(path){
                        path.basename = path.basename.substring(0, path.basename.length -9);
                    }))
                    .pipe( plugins.if(config.es6, plugins.babel(babelOption)) )
                    .pipe(plugins.wrapper(headerWrapper))
                    .pipe(gulp.dest(paths.scripts.dest))
                    .pipe(plugins.rename({suffix: '.min'}))
                    .pipe(plugins.uglify({preserveComments: 'some'}))
                    .pipe(gulp.dest(paths.scripts.dest))
                    .pipe(plugins.notify({message: 'Scripts task complete', onLast: true}));

    return merge(concatenate, copy);
});

// Copy Files to Build
gulp.task('copy', function() {
    var assets = {searchPath: basePaths.dest};

  // Minify and Copy HTML
    var html = gulp.src([
                        basePaths.dest + '**/*.{html,php}',
                        '!' + basePaths.bower + '{,/**}'
                    ])
                    .pipe(plugins.useref(assets))
                    .pipe(plugins.if('*.js', plugins.uglify()))
                    .pipe(plugins.if('*.css', plugins.csso()))
                    .pipe(plugins.if('*.html', plugins.htmlmin({collapseWhitespace: true, spare:true, empty: true, conditionals: true})))
                    .pipe(plugins.if('*.php', plugins.htmlmin({collapseWhitespace: true, spare:true, empty: true, conditionals: true})))
                    .pipe(gulp.dest(basePaths.build));

    // Copy All Other files except HTML, PHP, CSS e JS Files
    var allFiles = gulp.src([
                            '!' + basePaths.bower + '{,/**}',
                            basePaths.dest + '**/*',
                            '!' + paths.styles.dest + '**/*',
                            '!' + paths.scripts.dest + '**/*',
                            '!' + basePaths.dest + '**/*.{html,php}'
                        ], {dot: true})
                        .pipe(gulp.dest(basePaths.build));

    return merge(html, allFiles);
});

gulp.task('get-preprocessor', function(){
    args.sass && (argProcessor = 'sass');
    args.stylus && (argProcessor = 'stylus');
});

//Set the preprocessor in variable
gulp.task('set-preprocessor', function(){
    if(args.sass || args.stylus){
        return gulp.src(['gulpfile.js'])
            .pipe(plugins.replace(/preprocessor\s=\s'[a-z]{4,6}/g, "preprocessor = \'" + argProcessor))
            .pipe(gulp.dest('./'));
    }
});

//Copy the files to use
gulp.task('folder-preprocessor', function(){
    if(args.sass || args.stylus){
        return gulp.src(paths.styles.src + argProcessor + '/**/*')
            .pipe(gulp.dest(paths.styles.src));
    }
});

//Removes unnecessary folders
gulp.task('remove-preprocessors', function(cb){
    var deletePath = [];

    if(!config.components){
        deletePath.push(paths.styles.src + '**/components');
    }

    if(args.sass || args.stylus){
        deletePath.push(paths.styles.src + 'sass', paths.styles.src + 'stylus');
    }

    return del(deletePath, cb);
});

//Install bower dependencies
gulp.task('bower', function(){
    return plugins.bower();
});

gulp.task('logodownload', ['outdatedbrowser'], function(){
    if((config.logoDownloadtip && !config.jQuery) || !config.logoDownloadtip){
        var htmlLogo = gulp.src(basePaths.dest + 'index.html')
                                .pipe(plugins.replace(
                                /\t\t<link rel="stylesheet" href="bower_components\/jquery-logo-downloadtip\/css\/jquery-logo-downloadtip.css">\n/g, ''))
                                .pipe(plugins.replace(
                                /\t\t<script src="bower_components\/jquery-logo-downloadtip\/js\/jquery-logo-downloadtip.min.js"><\/script>\n/g, ''))
                                .pipe(plugins.replace(
                                /\t\t<!-- Logos[\w\W]+.eps\)\" \/>\n\n/g, ''))
                                .pipe(gulp.dest(basePaths.dest));

        var bowerLogo = gulp.src('bower.json')
                                .pipe(plugins.replace(/\s{4}"jquery-logo-downloadtip[0-9\s:"~.]+,\n/g, ''))
                                .pipe(gulp.dest('./'));

        return merge(htmlLogo, bowerLogo);
    }
});

gulp.task('outdatedbrowser', ['jquery'], function(){
    if(!config.outdatedBrowser){
        var htmlOut = gulp.src(basePaths.dest + '*.html')
                                .pipe(plugins.replace(/\t\t<link rel="stylesheet" href="bower_components\/outdated-browser\/outdatedbrowser\/outdatedbrowser.css">\n/g, ''))
                                .pipe(plugins.replace(/\t\t<script src="bower_components\/outdated-browser\/outdatedbrowser\/outdatedbrowser.js"><\/script>\n/g, ''))
                                .pipe(plugins.replace(/\t\t<!-- [=]+ Outdated Browser[\s=\-\>\<a-zA-Z"\/!]+-->\n\n/g, ''))
                                .pipe(gulp.dest(basePaths.dest));


        var bowerOut = gulp.src('bower.json')
                                .pipe(plugins.replace(/\s{4}"outdated-browser[0-9\s:"~.]+,\n/g, ''))
                                .pipe(gulp.dest('./'));

        return merge(htmlOut, bowerOut);
    }else{
        return gulp.src(basePaths.bower + '/outdated-browser/outdatedbrowser/lang/*')
                        .pipe(gulp.dest(basePaths.dest + 'lang/outdated_browser'));
    }
});

gulp.task('jquery', function() {
    if(!config.jQuery){
        var indexCalls = gulp.src(basePaths.dest + 'index.html')
                                .pipe(plugins.replace(
                                /\t\t<script src="bower_components\/jquery\/dist\/jquery.js"><\/script>\n/g, ''))
                                .pipe(gulp.dest(basePaths.dest));

        var eslint = gulp.src('./.eslintrc')
                            .pipe(plugins.replace(/jquery":\strue/g, 'jquery": false'))
                            .pipe(gulp.dest('./'));

        var bowerJquery = gulp.src('bower.json')
                                .pipe(plugins.replace(/\s{4}"jquery"[0-9\s:"~.]+,\n/g, ''))
                                .pipe(gulp.dest('./'));

        return merge(indexCalls, eslint, bowerJquery);
    }
});

//Set the use of components
gulp.task('set-dependencies', ['logodownload'], function(){
    if(!config.components){
        var stylesComponents = gulp.src(paths.styles.src + '**/*.{styl,sass,scss}')
                                        .pipe(plugins.replace(/@import "compo[\w\W]+area"/g, ''))
                                        .pipe(gulp.dest(paths.styles.src));
    }

    //Remove outdated and leave logo
    if(!config.outdatedBrowser && (config.logoDownloadtip && config.jQuery)){
         var outdatedTrue = gulp.src(paths.scripts.src + 'settings/call_plugins.js')
                                    .pipe(plugins.replace(/\toutdatedBrowser[\W\w]+,\n\n/g, ''))
                                    .pipe(gulp.dest(paths.scripts.src + 'settings/'));

    //Remove logo and leave outdated
    }else if(config.outdatedBrowser && (!config.jQuery || !config.outdatedBrowser)){
        var outdatedFalse = gulp.src(paths.scripts.src + 'settings/call_plugins.js')
                                    .pipe(plugins.replace(/,\n\n\t[\W\w]+\}\)/g, ''))
                                    .pipe(gulp.dest(paths.scripts.src + 'settings/'));

    //Remove both
    }else if(!config.outdatedBrowser && (!config.jQuery || !config.outdatedBrowser)){
             var allFalse = gulp.src(paths.scripts.src + 'settings/call_plugins.js')
                                    .pipe(plugins.replace(/\toutdatedBrowser[\W\w]+\);/g, ');'))
                                    .pipe(gulp.dest(paths.scripts.src + 'settings/'));
    }

    var bower_path = gulp.src('./.bowerrc')
                            .pipe(plugins.replace(/"directory" : "[a-z\/_]+"/g, '"directory" : "' + basePaths.bower + '"'))
                            .pipe(gulp.dest('./'));


    var styles_var = gulp.src(paths.styles.src + '**/*.{styl,sass,scss}')
                            .pipe(plugins.replace(/(image-path[\s=:]+ ")[.\/a-z]+"/g, '$1../' + basePaths.images.dest + '"'))
                            .pipe(plugins.replace(/(font-path[\s=:]+ ")[.\/a-z]+"/g, '$1../' + basePaths.fonts.dest + '"'))
                            .pipe(gulp.dest(paths.styles.src));
});

//*************************** Utility Tasks ******************************//

gulp.task('setup', function(cb){
    sequence('get-preprocessor', 'set-preprocessor', 'folder-preprocessor', 'set-dependencies', 'bower', 'remove-preprocessors', cb);
});

gulp.task('combine-assets', function() {
    var assets = {searchPath: basePaths.dest};

    // Minify and Copy HTML
    return gulp.src(basePaths.dest + '**/*.{html,php}')
                    .pipe(plugins.useref(assets))
                    .pipe(plugins.if('*.js', plugins.uglify()))
                    .pipe(plugins.if('*.css', plugins.csso()))
                    .pipe(gulp.dest(basePaths.dest));
});

// Clean Directories
gulp.task('clean', function(cb) {
    return del([
        basePaths.build,
        paths.styles.dest,
        paths.scripts.dest,
        paths.styles.src + 'helpers/{_bitmap-sprite,_vetor-sprite}.{styl,scss}',
        paths.images.dest + '**/*',
        // Add here the folders that will not be deleted in app/img
        '!' + paths.images.dest + '{copyright,logos}{,**/*{,**/*}}'
    ], cb);
});

//***************************** Main Tasks *******************************//

// Serve the project and watch
gulp.task('serve', function() {
    browserSync(config.browserSync);

    gulp.watch([
                paths.images.src + '**/*.{bmp,gif,jpg,jpeg,png,svg}',
                '!' + paths.sprite.src + '**/*'
               ],

               ['images', browserSync.reload]
     );

    gulp.watch( paths.sprite.src + '**/*.{png,gif}', ['bitmap-sprite', browserSync.reload] );

    gulp.watch( paths.sprite.src + '**/*.svg', ['vetor-sprite', 'styles', browserSync.reload] );

    gulp.watch( paths.images.dest + '**/*.svg', ['svg2png', 'handlebars', browserSync.reload] );

    gulp.watch( paths.scripts.src + '*.js', ['scripts', browserSync.reload] );

    gulp.watch( paths.scripts.src + 'settings/**/*.js', ['vendor-scripts', browserSync.reload]);

    gulp.watch([
                paths.styles.src + '**/*.{styl,scss,sass}',
                '!' + paths.styles.src + 'helpers/{mixins,functions}/*.{styl,scss,sass}'
               ],

               ['styles', browserSync.reload]
    );

    gulp.watch( paths.styles.src + 'helpers/{mixins,functions}/*.{styl,scss,sass}', ['styles-helpers'] );

    gulp.watch( paths.html.src + '**/*.{html,hbs}', ['handlebars'] );

    gulp.watch( basePaths.dest + '**/*.{html,php,json}', ['svg-inline', browserSync.reload]);
});

// Serve project and clean, compile and watch if pass the parameter --compile
gulp.task('default', function() {
    if(args.compile){
        sequence('clean', ['handlebars', 'images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'svg-inline', 'styles', 'scripts', 'serve');
    } else {
        sequence('handlebars', 'serve');
    }
});

// Clean and compile the project
gulp.task('compile', function() {
    sequence('clean', ['handlebars','images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'svg-inline', 'styles', 'scripts');
});

gulp.task('gh', function() {
    return gulp.src( basePaths.build + '**/*')
                    .pipe(ghPages());
});

// Build the project and push the builded folder to gh-pages branch
gulp.task('gh-pages', function() {
    env = 'prod';
    sequence(['handlebars', 'images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'svg-inline', 'styles', 'scripts', 'copy', 'gh');
});

// Build Project and serve if pass the parameter --serve
gulp.task('build', ['clean'], function() {
    sequence(['handlebars', 'images', 'bitmap-sprite', 'vetor-sprite', 'styles-helpers', 'vendor-scripts'], 'svg2png', 'svg-inline', 'styles', 'scripts', 'copy', function(){ args.serve && browserSync(config.browserSyncBuild); }
    );
});
