import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { cleandir } from 'rollup-plugin-cleandir';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esmShim from '@rollup/plugin-esm-shim';
const isProduction = process.env.NODE_ENV === 'production';
export default {
  input: ['./src/index.ts'],
  output: [
    {
      file: './dist/index.cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    cleandir('./dist'),
    nodeResolve({
      extensions: ['.ts', '.mjs', '.js', '.json', '.node'],
      exportConditions: ['node'],
      preferBuiltins: false,
    }),
    typescript(),
    commonjs({
      //include: /node_modules/,
      requireReturnsDefault: 'auto',
      sourceMap: !isProduction,
    }),
    json(),
    esmShim(),
  ],
};
