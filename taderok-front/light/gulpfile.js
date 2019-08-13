var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');


paths = {
	'bower': './bower_components'
};

function scss() {
	return gulp.src(['src/assets/scss/**/*.scss',
		'scss/*.scss',paths.nodes+'owl.carousel/dist/assets/owl.carousel.css'
	])
		.pipe(sass())
		.pipe(uglifycss())
		.pipe(gulp.dest('src/assets/css/'))
    .pipe(gulp.dest(paths.dev+'/owl'))
};

//Copy, compile, minify all scripts
function scripts(done) {
	gulp.src([
	  paths.node+'owl.carousel/dist/owl.carousel.js',
		paths.bower + '/jquery/dist/jquery.js',
		paths.bower + '/materialize/dist/js/materialize.min.js',
		paths.bower + '/jquery-validation/dist/jquery.validate.js',
		paths.bower + '/jquery-ui/jquery-ui.min.js',
		paths.bower + '/popper.js/dist/umd/popper.js',
		paths.bower + '/bootstrap/dist/js/bootstrap.js',
		paths.bower + '/bootstrap-select/dist/js/bootstrap-select.js',
		paths.bower + '/jquery-slimscroll/jquery.slimscroll.min.js',
		paths.bower + '/Waves/dist/waves.js',
		paths.bower + '/bootstrap-sweetalert/dist/sweetalert.min.js',
		paths.bower + '/jquery-countTo/jquery.countTo.js',
		paths.bower + '/jquery-sparkline/dist/jquery.sparkline.js',
		paths.bower + '/momentjs/min/moment.min.js',
		paths.bower + '/remarkable-bootstrap-notify/dist/bootstrap-notify.js',
		paths.bower + '/jquery.nestable/jquery.nestable.js',
		paths.bower + '/wait-me/src/waitMe.js',
		paths.bower + '/fullcalendar/dist/fullcalendar.min.js',
		paths.bower + '/owl.carousel/dist/owl.carousel.min.js',
		paths.bower + '/materialize/extras/noUiSlider/nouislider.min.js',
		paths.bower + '/dragula.js/dist/dragula.min.js',

	])
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'))
    .pipe(gulp.dest(paths.dev+'owl'));
	done();
};

//Copy, compile, minify all chart script
function chart(done) {
	gulp.src([
		paths.bower + '/morris.js/morris.js',
		paths.bower + '/raphael/raphael.min.js',
		paths.bower + '/chart.js/dist/Chart.bundle.js',
		paths.bower + '/Flot/jquery.flot.js',
		paths.bower + '/Flot/jquery.flot.resize.js',
		paths.bower + '/Flot/jquery.flot.pie.js',
		paths.bower + '/Flot/jquery.flot.categories.js',
		paths.bower + '/Flot/jquery.flot.time.js',
		paths.bower + '/jquery-knob/dist/jquery.knob.min.js',
	])
		.pipe(concat('chart.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};
//Copy, compile, minify all form script
function form(done) {
	gulp.src([
		paths.bower + '/inputmask/dist/min/jquery.inputmask.bundle.min.js',
		paths.bower + '/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js'

	])
		.pipe(concat('form.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};
//Copy, compile, minify all table script
function table(done) {
	gulp.src([
		paths.bower + '/datatables/media/js/jquery.dataTables.js',
		paths.bower + '/datatables/media/js/dataTables.bootstrap4.js',
		paths.bower + '/editable-table/mindmup-editabletable.js',

	])
		.pipe(concat('table.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};
//Copy, compile, minify all map script
function map(done) {
	gulp.src([
		paths.bower + '/gmaps/gmaps.js',
		paths.bower + '/jqvmap/dist/jquery.vmap.min.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.world.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.usa.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.russia.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.europe.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.germany.js',
	])
		.pipe(concat('map.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/assets/js/'));
	done();
};
//Copy, compile, minify all plugins styles
function style(done) {
	return gulp.src([
		paths.bower + '/materialize/dist/css/materialize.css',
		paths.bower + '/bootstrap/dist/css/bootstrap.css',
		paths.bower + '/simple-line-icons/css/simple-line-icons.css',
		paths.bower + '/Waves/dist/waves.css',
		paths.bower + '/animate.css/animate.css',
		paths.bower + '/morris.js/morris.css',
		paths.bower + '/wait-me/src/waitMe.css',
		paths.bower + '/bootstrap-sweetalert/dist/sweetalert.css',
		paths.bower + '/jqvmap/dist/jqvmap.min.css',
		paths.bower + '/datatables/media/css/dataTables.bootstrap4.css',
		paths.bower + '/jquery.nestable/jquery.nestable.css',
		paths.bower + '/fullcalendar/dist/fullcalendar.min.css',
		paths.bower + '/owl.carousel/dist/assets/owl.carousel.min.css',
		paths.bower + '/owl.carousel/dist/assets/owl.theme.default.min.css',
		paths.bower + '/materialize/extras/noUiSlider/nouislider.css'

	])
		.pipe(concat('app.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(uglifycss())
		.pipe(gulp.dest('src/assets/css/'));
	done();
};
//Copy, compile, minify all forms styles
function formStyle(done) {
	return gulp.src([
		paths.bower + '/bootstrap-select/dist/css/bootstrap-select.css',
		paths.bower + '/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',

	])
		.pipe(concat('form.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(uglifycss())
		.pipe(gulp.dest('src/assets/css/'));
	done();
};

gulp.task("scss", scss);
gulp.task("scripts", scripts);
gulp.task("chart", chart);
gulp.task("form", form);
gulp.task("style", style);
gulp.task("map", map);
gulp.task("table", table);
gulp.task("formStyle", formStyle);

gulp.task("default", gulp.series(scss, scripts, chart, form, style, map, table, formStyle));
