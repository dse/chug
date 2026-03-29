import gulp from 'gulp';
import { createCleanTask } from './clean.js';
import { createSassTask } from './sass.js';
import { createRollupTask } from './rollup.js';
import { createStaticTask } from './static.js';
import { createNunjucksTask } from './nunjucks.js';
import { createInitTask } from './init.js';
import { createSitemapTask } from './sitemap.js';

function createBuildTask(options) {
    options = { mode: "build", ...options };
    return gulp.series(
        createCleanTask(options),
        createInitTask(options),
        gulp.parallel(
            createSassTask(options),
            createRollupTask(options),
            gulp.series(
                gulp.parallel(
                    createStaticTask(options),
                    createNunjucksTask(options),
                ),
                createSitemapTask(options),
            ),
        )
    );
}

export default createBuildTask;
