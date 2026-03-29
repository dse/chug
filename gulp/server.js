import browsersync from 'browser-sync';

import { config } from "./config.js";

let server;

export function startServerTask(cb) {
    console.log(`starting startServerTask`);
    if (server) {
        cb?.();
        return;
    }
    server = browsersync.create();
    server.init(config.browsersync, cb);
}

export function serverTask() {
    console.log(`starting serverTask`);
    // never returns
    if (server) {
        return;
    }
    server = browsersync.create();
    server.init(config.browsersync);
}

export function reloadTask(cb) {
    console.log(`reloadTask: reloading server`);
    if (server) {
        server.reload();
    }
    cb?.();
}
