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
            return createSiteData();
        },
    };
}
