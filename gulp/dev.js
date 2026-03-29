import gulp from 'gulp';
import { createCleanTask } from './clean.js';
import { createSassTask } from './sass.js';
import { createRollupTask } from './rollup.js';
import { createNunjucksTask } from './nunjucks.js';
import { createStartServerTask } from './server.js';
import { createWatchTask } from './watch.js';
import { createInitTask } from './init.js';

export function createDevTask(options) {
    options = { mode: "dev", ...options };
    return gulp.series(
        createCleanTask(options),
        createInitTask(options),
        gulp.parallel(
            createSassTask(options),
            createRollupTask(options),
            createNunjucksTask(options),
        ),
        createStartServerTask(options),
        createWatchTask(options),
    );
}

export default createDevTask;
