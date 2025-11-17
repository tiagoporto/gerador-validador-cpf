import { describe, expect, it } from '@jest/globals'
import { mockRandom } from 'jest-mock-random'

import { generate } from './index.js'

describe('generate cnpj', () => {
  it.each([
    {
      mock: [0.4, 0.9, 0, 0.9, 0.4, 0.2, 0.5, 0, 0, 0, 0, 0.1],
      expected: '49094250000127',
    },
    {
      mock: [0.5, 0.3, 0, 0.3, 0, 0.8, 0.6, 0.6, 0, 0, 0, 0.1],
      expected: '53030866000101',
    },
    {
      mock: [0.3, 0.8, 0.4, 0.7, 0.2, 0.6, 0.7, 0.7, 0, 0, 0, 0.1],
      expected: '38472677000103',
    },
  ])('should generate a valid CNPJ $expected', ({ mock, expected }) => {
    expect.assertions(1)

    mockRandom(mock)
    const cnpj = generate()

    expect(cnpj).toBe(expected)
  })

  it.each([
    {
      mock: [0.1, 0.9, 0.6, 0, 0.2, 0.8, 0, 0.9, 0, 0, 0],
      expected: '19602809000111',
    },
    {
      mock: [0.3, 0.4, 0.4, 0.8, 0.9, 0.2, 0.3, 0.9, 0, 0, 0, 0.1],
      expected: '34489239000199',
    },
  ])(
    'should generate a valid non formatted cnpj $expected',
    ({ mock, expected }) => {
      expect.assertions(2)

      mockRandom(mock)
      const cnpj = generate({ format: false })

      expect(cnpj).toBe(expected)
      expect(Number.isNaN(Number(cnpj))).toBeFalsy()
    },
  )

  it.each([
    {
      mock: [0.2, 0, 0.6, 0.5, 0.1, 0.5, 0.2, 0.2, 0, 0, 0, 0.13],
      expected: '20.651.522/0001-60',
    },
    {
      mock: [0.7, 0.2, 0, 0.4, 0.4, 0.7, 0.2, 0.7, 0, 0, 0, 0.1],
      expected: '72.044.727/0001-81',
    },
  ])('should generate a formatted cnpj $expected', ({ mock, expected }) => {
    expect.assertions(2)

    mockRandom(mock)
    const cnpj = generate({ format: true })

    expect(cnpj).toBe(expected)
    expect(cnpj).toBeTruthy()
  })

  it('should not return a cnpj with all digits equal to 0', () => {
    expect.assertions(1)

    mockRandom([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // first attempt -> 000000000000
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0, 0.1, 0.2, // retry -> 123456789012
    ])

    const cnpj = generate()

    expect(cnpj).toBe('12345678901230')
  })
})
