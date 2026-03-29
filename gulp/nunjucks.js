import gulp from 'gulp';
import data from 'gulp-data';
import nunjucks from 'gulp-nunjucks-render';
import beautify from "gulp-beautify";

import createSiteData from './site-data.js';
import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { config } from "./config.js";

const NUNJUCKS_FILES = [
    'src/pages/**/*.njk',
    ...EXCLUDE_PARTIALS,
    ...EXCLUDE_TEMP_FILES,
];

export const NUNJUCKS_PARTIALS = [
    'src/pages/**/_*.njk',
    'src/pages/**/_*/**/*.njk',
];

let resetHtmlLastRunFlag = true;

export function nunjucksTask() {
    console.info(`starting nunjucksTask`);
    return gulp.src(NUNJUCKS_FILES,
                    { base: 'src/pages',
                      since: gulp.lastRun(nunjucksTask) })
               .pipe(data(createSiteData))
               .pipe(nunjucks(config.nunjucks))
               .pipe(beautify.html(config.beautify.html))
               .pipe(gulp.dest("dist/web"));
}

export function resetLastRunTask(cb) {
    // Invoked when a partial changes before nunjucksTask is
    // invoked, so that everything is recompiled.
    resetHtmlLastRunFlag = true;
    cb?.();
}

export default nunjucksTask;
