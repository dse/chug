import babel from '@rollup/plugin-babel';
import * as rollup from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import { getConfigDist } from "./config.js";

export function createRollupTask(options) {
    const dist = getConfigDist(options);
    return function rollupTask() {
        return rollup
            .rollup({ input: 'src/scripts/main.js',
                      plugins: [resolve(), babel({ babelHelpers: 'bundled' })] })
            .then(bundle => {
                const filename = `${dist}/js/main.js`;
                return bundle.write({
                    file: filename,
                    format: 'umd',
                    name: 'library',
                });
            });
    };
}

export default createRollupTask;
