import fs from "node:fs";
import { glob } from "glob";
import { EXCLUDE_PARTIALS, EXCLUDE_TEMP_FILES } from './constants.js';

export function createSiteData(options) {
    const filenames = glob.sync([
        "src/data/**/*.json",
        ...EXCLUDE_PARTIALS, ...EXCLUDE_TEMP_FILES,
    ]);
    filenames.sort();
    const o = {};
    for (const filename of filenames) {
        const text = fs.readFileSync(filename, "utf-8");
        const obj = JSON.parse(text);
        Object.assign(o, obj);
    }
    Object.assign(o, {
        "cacheBuster": String(new Date().getTime()) + "." + String(Math.floor(1 + Math.random())).slice(2)
    });
    return o;
}

export default createSiteData;
