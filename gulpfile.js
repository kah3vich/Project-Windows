let project_folder = "public";
let source_folder = "#src";
let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
        icon: project_folder + "/svg/",
    },
    src: {
        html: [source_folder + "/*.pug", "!" + source_folder + "/**/_*.pug"],
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{png, jpg, svg, ico, webp}",
        fonts: source_folder + "/fonts/**/*.ttf",
        icon: source_folder + "/svg/**/*.svg",
    },
    watch: {
        html: source_folder + "/**/*.pug",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg, png, svg, ico, webp}",
        icon: source_folder + "/svg/*.svg",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp =          require('gulp'),
    browsersync =   require("browser-sync").create(),
    fileinclude =   require("gulp-file-include"),
    del =           require("del"),
    sass =          require('gulp-sass')(require('sass')),
    autoprefixer =  require('gulp-autoprefixer'),
    group_media =   require('gulp-group-css-media-queries'),
    clean_css =     require('gulp-clean-css'),
    rename =        require('gulp-rename'),
    uglify =        require('gulp-uglify-es').default,
    ttf2woff =      require('gulp-ttf2woff'),
    ttf2woff2 =     require('gulp-ttf2woff'),
    fs =            require('fs'),
    babel =         require('gulp-babel'),
    pug =           require('gulp-pug'),
    notify =        require('gulp-notify'),
    log =           require('fancy-log'),
    chalk =         require('chalk');

function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 2021,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())      
        .pipe(pug({
            locals: {},
            pretty: true
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
        } ) )
        .on('error', function(){ log(chalk.red('/----------------------------------/'))}))
        .on('error', function(){ log(chalk.red('Error Error Error Error Error Error'))})
        .on('error', function(){ log(chalk.red('Error Error Error Error Error Error'))})
        .on('error', function(){ log(chalk.red('Error Error Error Error Error Error'))})
        .on('error', function(){ log(chalk.red('/----------------------------------/'))})
        .pipe(group_media())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            cascade: true,
            grid: true
        }))
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))                             
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())   
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function svg() {
    return src(path.src.icon)
        .pipe(dest(path.build.icon))
        .pipe(browsersync.stream()) 
}

function fontsStyle(params) { 
    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + 
                            '/scss/fonts.scss', '@include font("' + 
                            fontname + '", "' + fontname + 
                            '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
} 

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
    gulp.watch([path.watch.icon], svg);
}

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts)); 
}

function clean() {
    return del(path.clean)
}

let build = gulp.series(clean, 
        gulp.parallel(js, css, html, images, fonts, svg), fontsStyle); 
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;                                        // подключение шрифтов в css 
exports.fonts = fonts;                                                  // преобразование шрифтов 
exports.images = images;                                                // сжатие фотографий 
exports.js = js;                                                        // обработка и минимизация файлов js 
exports.svg = svg                                                       // обработка файлов svg
exports.css = css;                                                      // обработка и минимизация файлов sccs в css 
exports.html = html;                                                    // обработка и объединение файлов html
exports.build = build;                                                  // сборка всех файлов 
exports.watch = watch;                                                  // слежка за изменениями файлов
exports.default = watch;                                                // вызов функции - gulp 


//! --------------------------------------------------------------------
//! --------------------------------------------------------------------
//! --------------------------------------------------------------------