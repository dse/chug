import gulp from 'gulp';

import { cleanTask } from './clean.js';
import { initTask } from './init.js';
import { sassTask } from './sass.js';
import { rollupTask } from './rollup.js';
import { nunjucksTask } from './nunjucks.js';
import { startServerTask } from './server.js';
import { watchTask } from './watch.js';

export const devTask = gulp.series(
    cleanTask,
    initTask,
    gulp.parallel(
        sassTask,
        rollupTask,
        nunjucksTask,
    ),
    startServerTask,
    watchTask,
);

export const devSeriesTask = gulp.series(
    cleanTask,
    initTask,
    sassTask,
    rollupTask,
    nunjucksTask,
    startServerTask,
    watchTask,
);

export default devTask;
