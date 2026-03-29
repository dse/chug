import fs from "node:fs";

export function initTask(cb) {
    console.info(`initTask: starting`);
    fs.mkdirSync("dist/web", { recursive: true });
    console.info(`initTask: finishing`);
    cb?.();
}

export default initTask;
