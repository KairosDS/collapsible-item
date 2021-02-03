import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    preserverSymlinks: true, 
    input: [ 'collapsible-item.js' ], 
    output: {
        file: 'dist/collapsible-item.js', 
        format: 'es', 
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel(),
        terser()
    ]
};