import gulp from 'gulp';
import { EXCLUDE_TEMP_FILES, EXCLUDE_PARTIALS } from './constants.js';
import { reloadTask } from './server.js';
import { NUNJUCKS_PARTIALS } from './nunjucks.js';

import { createSassTask } from './sass.js';
import { createRollupTask } from './rollup.js';
import { createNunjucksTasks } from './nunjucks.js';

export function createWatchTask(options) {
    const { nunjucksTask, resetLastRunTask } = createNunjucksTasks(options);
    const sassTask = createSassTask(options);
    const rollupTask = createRollupTask(options);

    return function watchTask() {
        gulp.watch(['src/pages/**/*.njk', ...EXCLUDE_TEMP_FILES, ...EXCLUDE_PARTIALS],
                   gulp.series(nunjucksTask, reloadTask));
        gulp.watch([...NUNJUCKS_PARTIALS, ...EXCLUDE_TEMP_FILES],
                   gulp.series(resetLastRunTask, nunjucksTask, reloadTask));
        gulp.watch(['src/styles/**/*.scss', ...EXCLUDE_TEMP_FILES],
                   gulp.series(sassTask, reloadTask));
        gulp.watch(['src/scripts/**/*.js', ...EXCLUDE_TEMP_FILES],
                   gulp.series(rollupTask, reloadTask));
    };
}

export default createWatchTask;
