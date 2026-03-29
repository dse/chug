import gulp from 'gulp';
import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { getConfigDist } from "./config.js";

export function createStaticTask(options) {
    const dist = getConfigDist(options);
    return function staticTask() {
        return gulp.src(['public/**/*',
                         ...EXCLUDE_PARTIALS,
                         ...EXCLUDE_TEMP_FILES], { encoding: false })
                   .pipe(gulp.dest(dist));
    };
}

export default createStaticTask;
