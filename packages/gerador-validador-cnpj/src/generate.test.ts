import { describe, expect, it } from '@jest/globals'
import { mockRandom } from 'jest-mock-random'

import { generate } from './index.js'

describe('generate cnpj', () => {
  it.each([
    {
      mock: [0.1, 0.22, 0, 0.22, 0.1, 0.05, 0.13, 0, 0, 0, 0, 0.03],
      expected: '49094250000127',
    },
    {
      mock: [0.13, 0.07, 0, 0.08, 0, 0.2, 0.14, 0.15, 0, 0, 0, 0.04],
      expected: '53030866000101',
    },
    {
      mock: [0.07, 0.19, 0.11, 0.18, 0.05, 0.14, 0.17, 0.18, 0, 0, 0, 0.04],
      expected: '38472677000103',
    },
  ])('should generate a valid CNPJ $expected', ({ mock, expected }) => {
    mockRandom(mock)
    const cnpj = generate()

    expect(cnpj).toBe(expected)
  })

  it.each([
    {
      mock: [0.04, 0.21, 0.15, 0, 0.05, 0.19, 0, 0.22, 0, 0, 0],
      expected: '19602809000111',
    },
    {
      mock: [0.08, 0.1, 0.11, 0.2, 0.21, 0.06, 0.07, 0.22, 0, 0, 0, 0.03],
      expected: '34489239000199',
    },
  ])(
    'should generate a valid non formatted cnpj $expected',
    ({ mock, expected }) => {
      mockRandom(mock)
      const cnpj = generate({ format: false })

      expect(cnpj).toBe(expected)
      expect(Number.isNaN(Number(cnpj))).toBeFalsy()
    },
  )

  it.each([
    {
      mock: [0.06, 0, 0.15, 0.12, 0.04, 0.13, 0.06, 0.05, 0, 0, 0, 0.03],
      expected: '20.651.522/0001-60',
    },
    {
      mock: [0.17, 0.06, 0, 0.1, 0.11, 0.18, 0.05, 0.18, 0, 0, 0, 0.03],
      expected: '72.044.727/0001-81',
    },
  ])('should generate a formatted cnpj $expected', ({ mock, expected }) => {
    mockRandom(mock)
    const cnpj = generate({ format: true })

    expect(cnpj).toBe(expected)
    expect(Number.isNaN(Number(cnpj))).toBeTruthy()
  })
})
