export const config = {
    nunjucks: {
        "path": "src/pages",
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
};

export default config;
