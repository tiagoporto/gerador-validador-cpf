import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Header } from '.'

jest
  .mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(jest.fn()),
        },
      }
    },
  }))
  .mock('../Donate', () => ({
    Donate: () => <div>Donate</div>,
  }))
  .mock('../ChangeLocale', () => ({
    ChangeLocale: () => <div>ChangeLocale</div>,
  }))

describe('<Header/>', () => {
  it('should return', () => {
    const { getByText } = render(<Header />)

    expect(getByText('header.libInfo')).toBeInTheDocument()
  })
})
