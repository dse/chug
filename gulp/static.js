import gulp from 'gulp';

import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';

export function staticTask() {
    console.log(`starting staticTask`);
    return gulp.src(['public/**/*',
                     ...EXCLUDE_PARTIALS,
                     ...EXCLUDE_TEMP_FILES], { encoding: false })
               .pipe(gulp.dest("dist/web"));
}

export default staticTask;
