import { buildTask, buildSeriesTask } from "./gulp/build.js";
import { cleanTask } from "./gulp/clean.js";
import { initTask } from "./gulp/init.js";
import { devTask, devSeriesTask } from "./gulp/dev.js";
import { nunjucksTask } from "./gulp/nunjucks.js";
import { rollupTask } from "./gulp/rollup.js";
import { sassTask } from "./gulp/sass.js";
import { startServerTask, reloadTask, serverTask } from "./gulp/server.js";
import { createSiteData } from "./gulp/site-data.js";
import { staticTask } from "./gulp/static.js";
import { watchTask } from "./gulp/watch.js";
import { config } from "./gulp/config.js";

const siteData = createSiteData();
config.sitemap.siteUrl = siteData.domain;

export {
    buildTask,
    cleanTask,
    initTask,
    devTask,
    sassTask,
    watchTask,
    nunjucksTask,
    rollupTask,
    startServerTask,
    serverTask,
    reloadTask,
    createSiteData,
    staticTask,
    buildSeriesTask,
    devSeriesTask,
};
