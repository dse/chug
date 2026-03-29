import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import beautify from "gulp-beautify";
import { Transform } from "node:stream";
import { globSync } from "glob";

import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { config } from "./config.js";

const sass = gulpSass(dartSass);

export function sassTask(cb) {
    const files = [
        'src/styles/xx/**/*.scss',
        ...EXCLUDE_PARTIALS,
        ...EXCLUDE_TEMP_FILES,
    ];
    if (!globSync(files).length) {
        console.warn(`sassTask: no files found`);
        return cb?.();
    }
    console.info(`sassTask: starting`);
    return gulp.src(files)
               .pipe(new Transform({
                   objectMode: true,
                   transform(obj, enc, callback) {
                       console.log(obj.path);
                       this.push(obj);
                       callback();
                   },
               }))
               .pipe(sass(config.sass))
               .pipe(beautify.css(config.beautify.sass))    // .pipe(postcss([autoprefixer]))
               .pipe(gulp.dest(`dist/web/split-flap/styles`));
}
