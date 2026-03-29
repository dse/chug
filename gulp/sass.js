import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import beautify from "gulp-beautify";

import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { getConfigDist, config } from "./config.js";

const sass = gulpSass(dartSass);

export function createSassTask(options) {
    const dist = getConfigDist(options);
    return function sassTask() {
        return gulp.src(['src/styles/**/*.scss',
                         ...EXCLUDE_PARTIALS, ...EXCLUDE_TEMP_FILES])
                   .pipe(sass(config.sass))
                   .pipe(beautify.css(config.beautify.sass))
        // .pipe(postcss([autoprefixer]))
                   .pipe(gulp.dest(`${dist}/split-flap/styles`));
    };
}

export default createSassTask;
