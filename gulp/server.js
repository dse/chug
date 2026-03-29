import browsersync from 'browser-sync';

import { config } from "./config.js";

let server;

export function startServerTask(cb) {
    console.info(`startServerTask: starting`);
    function cb2() {
        console.info(`startServerTask: completed`);
        cb?.();
    }
    if (server) {
        console.info(`startServerTask: server already started`);
        cb?.();
        return;
    }
    server = browsersync.create();
    server.init(config.browsersync, cb2);
}

// never completes
export function serverTask() {
    console.info(`serverTask: starting`);
    // never returns
    if (server) {
        console.info(`serverTask: server already started`);
        return;
    }
    server = browsersync.create();
    server.init(config.browsersync);
}

export function reloadTask(cb) {
    console.info(`reloadTask: reloading server`);
    if (server) {
        server.reload();
    }
    console.info(`reloadTask: completed`);
    cb?.();
}
