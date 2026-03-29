export const config = {
    modes: {
        dev: {
            dist: "_build/web",
        },
        build: {
            dist: "dist/web",
        },
    },
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

export function getConfigDist(options) {
    return config.modes[options?.mode ?? "dev"].dist;
}

export function getBrowserSyncConfig(options) {
    const dist = getConfigDist(options);
    if (options?.mode === "build") {
        throw new Error("no browser-sync in build mode");
    }
    return {
        server: ['public', dist],
    };
}

export default config;
