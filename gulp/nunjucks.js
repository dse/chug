import gulp from 'gulp';
import data from 'gulp-data';
import nunjucks from 'gulp-nunjucks-render';
import beautify from "gulp-beautify";
import { globSync } from "glob";

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

const manageEnvCallbacks = [];

export function addManageEnvCallback(cb) {
    manageEnvCallbacks.push(cb);
}

function manageEnvironment(env) {
    manageEnvCallbacks.forEach(cb => cb(env));
}

export function nunjucksTask(cb) {
    const files = [
        ...NUNJUCKS_FILES,
    ];
    if (!globSync(files).length) {
        console.warn(`nunjucksTask: no files found`);
        return cb?.();
    }
    console.info(`nunjucksTask: starting`);
    return gulp.src(files,
                    { base: 'src/pages',
                      since: gulp.lastRun(nunjucksTask) })
               .pipe(data(createSiteData))
               .pipe(nunjucks({
                   ...config.nunjucks,
                   manageEnv: manageEnvironment,
               }))
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
