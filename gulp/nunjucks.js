import gulp from 'gulp';
import data from 'gulp-data';
import nunjucks from 'gulp-nunjucks-render';
import createSiteData from './site-data.js';
import beautify from "gulp-beautify";
import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { getConfigDist, config } from "./config.js";

const NUNJUCKS_FILES = [
    'src/pages/**/*.njk',
    ...EXCLUDE_PARTIALS,
    ...EXCLUDE_TEMP_FILES,
];

export const NUNJUCKS_PARTIALS = [
    'src/pages/**/_*.njk',
    'src/pages/**/_*/**/*.njk',
];

export function createNunjucksTasks(options) {
    const dist = getConfigDist(options);
    let resetHtmlLastRunFlag = true;
    return {
        nunjucksTask,
        resetLastRunTask,
    };
    function nunjucksTask() {
        return gulp.src(NUNJUCKS_FILES,
                        { base: 'src/pages',
                          since: gulp.lastRun(nunjucksTask) })
                   .pipe(data(createSiteData))
                   .pipe(nunjucks(config.nunjucks))
                   .pipe(beautify.html(config.beautify.html))
                   .pipe(gulp.dest(dist));
    }
    function resetLastRunTask(cb) {
        // Invoked when a partial changes before nunjucksTask is
        // invoked, so that everything is recompiled.
        resetHtmlLastRunFlag = true;
        cb?.();
    }
}

export default createNunjucksTasks;
