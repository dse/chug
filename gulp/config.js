export const config = {
    nunjucks: {
        "path": ["src/pages"],
    },
    beautify: {
        html: {
        },
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
    sitemap: {
    },
    browserSync: {
        server: ["dist/web", "public"],
    },
};

export default config;
