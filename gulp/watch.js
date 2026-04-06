import gulp from 'gulp';

import { EXCLUDE_TEMP_FILES, EXCLUDE_PARTIALS } from './constants.js';
import { NUNJUCKS_PARTIALS } from './nunjucks.js';
import { sassTask } from './sass.js';
// import { rollupTask } from './rollup.js';
import { nunjucksTask, resetLastRunTask } from './nunjucks.js';
import { reloadTask } from './server.js';

export function watchTask() {
    console.info(`watchTask: starting`);
    gulp.watch(['src/pages/**/*.njk', ...EXCLUDE_TEMP_FILES, ...EXCLUDE_PARTIALS],
               gulp.series(nunjucksTask, reloadTask));
    gulp.watch([...NUNJUCKS_PARTIALS, ...EXCLUDE_TEMP_FILES],
               gulp.series(resetLastRunTask, nunjucksTask, reloadTask));
    gulp.watch(['src/styles/**/*.scss', ...EXCLUDE_TEMP_FILES],
               gulp.series(sassTask, reloadTask));
    import("./rollup.js").then(({ rollupTask }) => {
        gulp.watch(['src/scripts/**/*.js', ...EXCLUDE_TEMP_FILES],
                   gulp.series(rollupTask, reloadTask));
    });
}

export function watchNunjucksTask() {
    console.info(`watchNunjucksTask: starting`);
    gulp.watch(['src/pages/**/*.njk', ...EXCLUDE_TEMP_FILES, ...EXCLUDE_PARTIALS],
               gulp.series(nunjucksTask, reloadTask));
    gulp.watch([...NUNJUCKS_PARTIALS, ...EXCLUDE_TEMP_FILES],
               gulp.series(resetLastRunTask, nunjucksTask, reloadTask));
}
export function watchSassTask() {
    console.info(`watchStylesTask: starting`);
    gulp.watch(['src/styles/**/*.scss', ...EXCLUDE_TEMP_FILES],
               gulp.series(sassTask, reloadTask));
}

export default watchTask;
