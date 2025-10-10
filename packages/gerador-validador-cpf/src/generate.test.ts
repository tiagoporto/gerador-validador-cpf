import { describe, expect, it, jest } from '@jest/globals'
import { mockRandom } from 'jest-mock-random'

import { generate } from './index.js'

describe('generate cpf', () => {
  it.each([
    {
      mock: [0.1, 0, 0.9, 0.9, 0, 0.3, 0, 0.8, 0],
      expected: '10990308030',
    },
    {
      mock: [0.9, 0.2, 0.6, 0, 0.3, 0.8, 0.9, 0.9, 0],
      expected: '92603899090',
    },
    {
      mock: [0.6, 0.3, 0.6, 0.1, 0.5, 0, 0.6, 0.4, 0],
      expected: '63615064011',
    },
  ])('should generate a valid CPF $expected', ({ mock, expected }) => {
    expect.assertions(2)

    mockRandom(mock)
    const cpf = generate()

    expect(cpf).toBe(expected)
    expect(Number.isNaN(Number(cpf))).toBeFalsy()
  })

  it.each([
    {
      mock: [0.5, 0.3, 0.1, 0.4, 0.7, 0.4, 0, 0, 0],
      expected: '53147400018',
    },
    {
      mock: [0.6, 0.9, 0, 0.4, 0, 0.7, 0.2, 0.3, 0],
      expected: '69040723001',
    },
  ])(
    'should generate a valid non formatted CPF $expected',
    ({ mock, expected }) => {
      expect.assertions(2)

      mockRandom(mock)
      const cpf = generate({ format: false })

      expect(cpf).toBe(expected)
      expect(Number.isNaN(Number(cpf))).toBeFalsy()
    },
  )

  it.each([
    {
      mock: [0.6, 0.4, 0.5, 0.1, 0.5, 0.2, 0.9, 0.3, 0],
      expected: '645.152.930-36',
    },
    {
      mock: [0.7, 0.8, 0.6, 0, 0.6, 0.3, 0.7, 0.7, 0],
      expected: '786.063.770-74',
    },
  ])('should generate a formatted CPF $expected', ({ mock, expected }) => {
    expect.assertions(2)

    mockRandom(mock)
    const cpf = generate({ format: true })

    expect(cpf).toBe(expected)
    expect(Number.isNaN(Number(cpf))).toBeTruthy()
  })

  it.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
    'should regenerate a new cpf if all digits are %i',
    (value) => {
      expect.assertions(1)

      const number = Number(`0.${value}`)
      jest
        .spyOn(Math, 'random')
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
        .mockReturnValueOnce(number)
      const cpf = generate()

      expect(cpf).not.toBe(value.toString().repeat(11))
    },
  )
})
