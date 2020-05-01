import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import license from 'rollup-plugin-license'

const date = new Date()
const banner = `/*!
*   Gerador e Validador de CPF v<%= pkg.version %>
*   http://tiagoporto.github.io/gerador-validador-cpf
*   Copyright (c) 2014-${date.getFullYear()} Tiago Porto (http://tiagoporto.com)
*   Released under the MIT license
*/
`

export default [
  {
    input: 'src/lib/CPF.ts',
    output: [
      {
        file: 'dist/CPF.umd.js',
        format: 'umd',
        name: 'CPF'
      },
      {
        file: 'dist/CPF.es.js',
        format: 'es'
      }
    ],
    plugins: [
      babel({ extensions: ['.js', '.ts'] }),
      license({
        banner
      })
    ]
  },
  {
    input: 'src/js/CPF.ts',
    output: [
      {
        file: 'dist/CPF.umd.min.js',
        format: 'umd',
        name: 'CPF'
      }
    ],
    plugins: [
      babel({ extensions: ['.js', '.ts'] }),
      terser(),
      license({
        banner
      })
    ]
  }
]
