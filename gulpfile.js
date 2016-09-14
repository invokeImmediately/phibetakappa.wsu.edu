var gulp = require('gulp');
var cmq = require('gulp-combine-media-queries');

gulp.task('cmq', function () {
  gulp.src('./css/pbk-custom.css')
	.pipe(cmq({
	  use_external: false
	}))
	.pipe(gulp.dest('css'));
});
