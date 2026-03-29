import browsersync from 'browser-sync';
import { getBrowserSyncConfig } from "./config.js";

export function createServerTasks(options) {
    let server;

    return {
        startServerTask,
        serverTask,
        reloadTask,
    };

    function startServerTask(cb) {
        if (server) {
            cb?.();
            return;
        }
        server = browsersync.create();
        const config = getBrowserSyncConfig();
        server.init(config, cb);
    }
    function serverTask() {
        // never returns
        if (server) {
            return;
        }
        server = browsersync.create();
        const config = getBrowserSyncConfig();
        server.init(config);
    }
    function reloadTask(cb) {
        console.log(`reloadTask: reloading server`);
        if (server) {
            server.reload();
        }
        cb?.();
    }
}

export default createServerTasks;
