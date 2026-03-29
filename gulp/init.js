import fs from "node:fs";
import { getConfigDist } from "./config.js";

export function createInitTask(options) {
    const dist = getConfigDist(options);
    return function initTask(cb) {
        fs.mkdirSync(dist, { recursive: true });
        cb?.();
    };
}
