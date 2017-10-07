/* global CPF ga */

const date = new Date()
document.getElementsByClassName('footer__year')[0].innerHTML = date.getFullYear()

// Helper functions
const addClass = (el, klass) => {
  el[0].className += ` ${klass}`
}

const removeClass = (el, klass) => {
  let elClass = ` ${el[0].className} `

  while (elClass.indexOf(` ${klass} `) !== -1) {
    elClass = elClass.replace(` ${klass} `, '')
  }

  el[0].className = elClass
}

const setListener = (className, func, action) => {
  const elements = document.getElementsByClassName(className)

  Array.from(elements).forEach(element => {
    element.addEventListener(action, func, false)
  })
}

// CPF functions
const validate = event => {
  event.preventDefault()

  const cpf = document.getElementById('validate-section__input--to-format').value
  const validCPF = CPF.validate(cpf)
  const messageInput = document.getElementsByClassName('validate-section__input--message')
  const message = (validCPF) ? 'CPF Válido' : 'CPF Inválido'

  if (validCPF) {
    removeClass(messageInput, 'validate-section__input--invalid')
    addClass(messageInput, 'validate-section__input--valid')
  } else {
    removeClass(messageInput, 'validate-section__input--valid')
    addClass(messageInput, 'validate-section__input--invalid')
  }

  messageInput[0].setAttribute('value', message)

  typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Validate CPF')
}

const generate = () => {
  document.getElementsByClassName('generate-section__input--generated')[0].setAttribute('value', CPF.generate())

  typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Generate CPF')
}

const format = event => {
  event.preventDefault()
  const params = document.getElementsByClassName('format-section__params')[0].value
  const fieldValue = document.getElementById('format-section__input').value

  document.getElementsByClassName('format-section__input--message')[0].setAttribute('value', CPF.format(fieldValue, params))

  typeof ga === 'function' && ga('send', 'event', 'button', 'click', 'Formate CPF')
}

generate()

setListener('generate-section__submit-button', generate, 'click')
setListener('validate-section__form', validate, 'submit')
setListener('format-section__form', format, 'submit')
setListener('format-section__form', format, 'submit')
