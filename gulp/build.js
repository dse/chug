import gulp from 'gulp';

import { cleanTask } from './clean.js';
import { sassTask } from './sass.js';
import { rollupTask } from './rollup.js';
import { staticTask } from './static.js';
import { nunjucksTask } from './nunjucks.js';
import { initTask } from './init.js';
import { sitemapTask } from './sitemap.js';

export const buildTask = gulp.series(
    cleanTask,
    initTask,
    gulp.parallel(
        sassTask,
        rollupTask,
        gulp.series(
            gulp.parallel(
                staticTask,
                nunjucksTask,
            ),
            sitemapTask,
        ),
    ),
);

export const buildSeriesTask = gulp.series(
    cleanTask,
    initTask,
    sassTask,
    rollupTask,
    staticTask,
    nunjucksTask,
    sitemapTask,
);

export default buildTask;
