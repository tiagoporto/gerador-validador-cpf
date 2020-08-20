import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser'
import license from 'rollup-plugin-license'
import resolve from '@rollup/plugin-node-resolve';

const banner = `
@preserve
Gerador e Validador de CPF v<%= pkg.version %>
http://tiagoporto.github.io/gerador-validador-cpf
Copyright (c) 2014-present Tiago Porto (http://tiagoporto.com)
Released under the MIT license
`

export default [
  {
    input: 'src/lib/CPF.ts',
    output: [
      {
        file: 'dist/CPF.es.js',
        format: 'es'
      },
      {
        file: 'dist/CPF.umd.js',
        format: 'umd',
        name: 'CPF'
      }
    ],
    external(id) {
      return id.includes('core-js');
    },
    plugins: [
      babel({ extensions: ['.js', '.ts'] }),
      resolve({
        extensions: ['.ts', '.js']
      }),
      license({
        banner
      })
    ]
  },
  {
    input: 'src/lib/CPF.ts',
    output: [
      {
        file: 'dist/CPF.umd.min.js',
        format: 'umd',
        name: 'CPF'
      }
    ],
    plugins: [
      babel({ extensions: ['.js', '.ts'] }),
      resolve({
        extensions: ['.ts']
      }),
      terser(),
      license({
        banner
      })
    ]
  }
]
