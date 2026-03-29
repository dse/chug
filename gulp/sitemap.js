import gulp from "gulp";
import sitemap from "gulp-sitemap";
import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { getConfigDist, config } from "./config.js";

export function createSitemapTask(options) {
    const dist = getConfigDist(options);
    return function sitemapTask() {
        return gulp.src([`${dist}/**/*.html`,
                         ...EXCLUDE_TEMP_FILES,
                         ...EXCLUDE_PARTIALS])
                   .pipe(sitemap(config.sitemap))
                   .pipe(gulp.dest(dist));
    };
}

export default createSitemapTask;
