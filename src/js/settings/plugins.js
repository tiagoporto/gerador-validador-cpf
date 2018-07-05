import 'highlightjs/styles/googlecode.css'
import Clipboard from 'clipboard'
import hljs from 'highlightjs'
import Inputmask from 'inputmask'

new Clipboard('.generate-section__copy-button, .format-section__copy-button')

const selector = document.getElementById('validate-section__input--to-format')
const im = new Inputmask('999.999.999-99')
im.mask(selector)

hljs.initHighlightingOnLoad()
