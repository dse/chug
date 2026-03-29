import gulp from 'gulp';

import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { globSync } from "glob";

export function staticTask(cb) {
    const files = [
        'public/**/*',
        ...EXCLUDE_PARTIALS,
        ...EXCLUDE_TEMP_FILES,
    ];
    if (!globSync(files).length) {
        console.warn(`staticTask: no files found`);
        return cb?.();
    }
    console.info(`staticTask: starting`);
    return gulp.src(files, { encoding: false })
               .pipe(gulp.dest("dist/web"));
}

export default staticTask;
