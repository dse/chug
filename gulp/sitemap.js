import gulp from "gulp";
import sitemap from "gulp-sitemap";

import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';
import { config } from "./config.js";
import { createSiteData } from "./site-data.js";

let siteData;

export function sitemapTask() {
    siteData = siteData ?? createSiteData();
    console.info(`starting sitemapTask`);
    return gulp.src([`dist/web/**/*.html`,
                     ...EXCLUDE_TEMP_FILES,
                     ...EXCLUDE_PARTIALS])
               .pipe(sitemap({
                   ...config.sitemap,
                   siteUrl: config.domain ?? "https://www.example.com/",
               }))
               .pipe(gulp.dest('dist/web'));
}

export default sitemapTask;
