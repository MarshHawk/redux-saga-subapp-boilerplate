import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import external from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
    input: './src/app.js',
    output: [{
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
    }, {
        file: pkg.module,
        format: 'es',
        sourcemap: true
    }],
    plugins: [
        // Preferably set as first plugin, https://www.npmjs.com/package/rollup-plugin-peer-deps-external
        //this 
        external(
            //{includeDependencies: true,}
        ),

        postcss({
          modules: true
        }),

        url(),

        // Allows node_modules resolution
        resolve(),

        // Compile JavaScript files
        babel({
            exclude: 'node_modules/**'
        }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        terser()

    ]
}