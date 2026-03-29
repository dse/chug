import fs from 'node:fs';
import { getConfigDist } from "./config.js";

export function createCleanTask(options) {
    const dist = getConfigDist(options);
    return function cleanTask(cb) {
        if (fs.existsSync(dist)) {
            fs.rmSync(dist, { recursive: true });
        }
        cb?.();
    };
}

export default createCleanTask;
