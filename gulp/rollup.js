import fs from "node:fs";
import babel from '@rollup/plugin-babel';
import * as rollup from 'rollup';
import resolve from '@rollup/plugin-node-resolve';

export function rollupTask(cb) {
    if (!fs.existsSync("src/scripts/main.js")) {
        return cb?.();
    }
    console.info(`starting rollupTask`);
    return rollup
        .rollup({ input: 'src/scripts/main.js',
                  plugins: [resolve(), babel({ babelHelpers: 'bundled' })] })
        .then(bundle => {
            const filename = `dist/web/js/main.js`;
            return bundle.write({
                file: filename,
                format: 'umd',
                name: 'library',
            });
        });
}
