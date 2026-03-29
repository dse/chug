import gulp from "gulp";
import sitemap from "gulp-sitemap";
import { globSync } from "glob";

import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { config } from "./config.js";
import { createSiteData } from "./site-data.js";

let siteData;

export function sitemapTask(cb) {
    const files = [
        `dist/web/**/*.html`,
        ...EXCLUDE_TEMP_FILES,
        ...EXCLUDE_PARTIALS,
    ];
    if (!globSync(files).length) {
        console.warn(`sitemapTask: no files found`);
        return cb?.();
    }
    siteData = siteData ?? createSiteData();
    console.info(`sitemapTask: starting`);
    return gulp.src(files)
               .pipe(sitemap({
                   ...config.sitemap,
                   siteUrl: config.domain ?? "https://www.example.com/",
               }))
               .pipe(gulp.dest('dist/web'));
}

export default sitemapTask;
