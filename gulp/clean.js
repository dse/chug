import fs from 'node:fs';

export function cleanTask(cb) {
    console.info(`cleanTask starting`);
    if (fs.existsSync("dist/web")) {
        fs.rmSync("dist/web", { recursive: true });
    }
    console.info(`cleanTask finishing`);
    cb?.();
}

export default cleanTask;
