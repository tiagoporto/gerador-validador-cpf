import { describe, expect, it } from '@jest/globals'
import { mockRandom } from 'jest-mock-random'

import { generate } from './index.js'

describe('generate cnpj', () => {
  it.each([
    {
      mock: [0.1, 0.22, 0, 0.22, 0.1, 0.05, 0.13, 0, 0, 0, 0, 0.03],
      expected: '49094250000127',
    },
    // {
    //   mock: [0.9, 0.2, 0.6, 0, 0.3, 0.8, 0.9, 0.9, 0],
    //   expected: '92603899090',
    // },
    // {
    //   mock: [0.6, 0.3, 0.6, 0.1, 0.5, 0, 0.6, 0.4, 0],
    //   expected: '63615064011',
    // },
  ])('should generate a valid CNPJ $expected', ({ mock, expected }) => {
    mockRandom(mock)
    const cnpj = generate()

    expect(cnpj).toBe(expected)
  })

  // eslint-disable-next-line jest/no-commented-out-tests
  // it.each([
  //   {
  //     mock: [0.5, 0.3, 0.1, 0.4, 0.7, 0.4, 0, 0, 0],
  //     expected: '53147400018',
  //   },
  //   {
  //     mock: [0.6, 0.9, 0, 0.4, 0, 0.7, 0.2, 0.3, 0],
  //     expected: '69040723001',
  //   },
  // ])(
  //   'should generate a valid non formatted cnpj $expected',
  //   ({ mock, expected }) => {
  //     mockRandom(mock)
  //     const cnpj = generate({ format: false })

  //     expect(cnpj).toBe(expected)
  //     expect(Number.isNaN(Number(cnpj))).toBeFalsy()
  //   },
  // )

  // eslint-disable-next-line jest/no-commented-out-tests
  // it.each([
  //   {
  //     mock: [0.6, 0.4, 0.5, 0.1, 0.5, 0.2, 0.9, 0.3, 0],
  //     expected: '645.152.930-36',
  //   },
  //   {
  //     mock: [0.7, 0.8, 0.6, 0, 0.6, 0.3, 0.7, 0.7, 0],
  //     expected: '786.063.770-74',
  //   },
  // ])('should generate a formatted cnpj $expected', ({ mock, expected }) => {
  //   mockRandom(mock)
  //   const cnpj = generate({ format: true })

  //   expect(cnpj).toBe(expected)
  //   expect(Number.isNaN(Number(cnpj))).toBeTruthy()
  // })

  // eslint-disable-next-line jest/no-commented-out-tests
  // it.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])(
  //   'should regenerate a new cnpj if all digits are %i',
  //   (value) => {
  //     const number = Number(`0.${value}`)
  //     jest
  //       .spyOn(Math, 'random')
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //       .mockReturnValueOnce(number)
  //     const cnpj = generate()

  //     expect(cnpj).not.toBe(value.toString().repeat(11))
  //   },
  // )
})
