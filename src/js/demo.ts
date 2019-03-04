import '../styles/demo.styl'
import * as CPF from './CPF'
import '../partials/donate/donate'

declare global {
  interface Window {
    ga: (a: string, b: string, c: string, d: string, e: string) => void
  }
}

const date = new Date()
document.getElementsByClassName('footer__year')[0].innerHTML = String(
  date.getFullYear()
)

// Helper functions
const addClass = (el: HTMLCollectionOf<Element>, klass: string): void => {
  el[0].className += ` ${klass}`
}

const removeClass = (el: HTMLCollectionOf<Element>, klass: string): void => {
  let elClass = ` ${el[0].className} `

  while (elClass.indexOf(` ${klass} `) !== -1) {
    elClass = elClass.replace(` ${klass} `, '')
  }

  el[0].className = elClass
}

const setListener = (
  className: string,
  func: (event?: Event) => void,
  action: string
): void => {
  const elements = document.getElementsByClassName(className)

  Array.from(elements).forEach(
    (element: Element): void => {
      element.addEventListener(action, func, false)
    }
  )
}

// CPF functions
const validate = (event: Event): void => {
  event.preventDefault()

  const cpf = (document.getElementById(
    'validate-section__input--to-format'
  ) as HTMLInputElement).value
  const validCPF = CPF.validate(cpf)
  const messageInput = document.getElementsByClassName(
    'validate-section__input--message'
  )
  const message = validCPF ? 'CPF Válido' : 'CPF Inválido'

  if (validCPF) {
    removeClass(messageInput, 'validate-section__input--invalid')
    addClass(messageInput, 'validate-section__input--valid')
  } else {
    removeClass(messageInput, 'validate-section__input--valid')
    addClass(messageInput, 'validate-section__input--invalid')
  }

  messageInput[0].setAttribute('value', message)
  typeof window.ga === 'function' &&
    window.ga('send', 'event', 'button', 'click', 'Validate CPF')
}

const generate = (): void => {
  document
    .getElementsByClassName('generate-section__input--generated')[0]
    .setAttribute('value', CPF.generate())

  typeof window.ga === 'function' &&
    window.ga('send', 'event', 'button', 'click', 'Generate CPF')
}

const format = (event: Event): void => {
  event.preventDefault()
  const params = (document.getElementsByClassName(
    'format-section__params'
  )[0] as HTMLInputElement).value
  const fieldValue = (document.getElementById(
    'format-section__input'
  ) as HTMLInputElement).value

  document
    .getElementsByClassName('format-section__input--message')[0]
    .setAttribute('value', CPF.format(fieldValue, params as CPF.formatOptions))

  typeof window.ga === 'function' &&
    window.ga('send', 'event', 'button', 'click', 'Formate CPF')
}

generate()

setListener('generate-section__submit-button', generate, 'click')
setListener('validate-section__form', validate, 'submit')
setListener('format-section__form', format, 'submit')
setListener('format-section__form', format, 'submit')
