import {
    createBuildTask,
    createCleanTask,
    createDevTask,
    createSassTask,
    createHtmlTask,
    createWatchTask,
    createNunjucksTask,
    createRollupTask,
    createServerTask,
    createReloadTask,
    createStaticTask,
} from "./index.js";

export {
    createBuildTask as build,
    createCleanTask as clean,
    createDevTask as dev,
    createSassTask as sass,
    createHtmlTask as html,
    createWatchTask as watch,
    createNunjucksTask as nunjucks,
    createRollupTask as rollup,
    createServerTask as server,
    createReloadTask as reload,
    createStaticTask as static,
};

function createConfig() {
    return {
        browserSync: {
            server: [
                "./dist",
                "./public",
            ],

        },
        sass: {
            includePaths: [
                "."                 // @import url("node_modules/...");
            ],
            quietDeps: true,
            silenceDeprecations: [
                "import",
            ],

        },
        gulpNunjucksRender: {
            "path": "src/pages",

        },
        sitemap: {
            siteUrl: siteData.url,

        },
        data: () => {
            return getSiteData();
        },
    };
}
