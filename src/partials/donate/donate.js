import './donation.styl'
import Clipboard from 'clipboard'

const ready = fn => {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(() => {
  const QRBox = document.getElementById('QRBox')
  const MainBox = document.getElementById('MainBox')
  const BTCQR = 'img/BTCQR.png'
  const LTCQR = 'img/LTCQR.png'
  const showQR = QR => {
    QR && (MainBox.style.backgroundImage = `url('${QR}')`)

    const donateBox = document.getElementById('donateBox')
    if (donateBox.classList) {
      donateBox.classList.add('blur')
    } else {
      donateBox.className += ` blur`
    }

    const fadeIn = el => {
      el.style.opacity = 0

      var last = +new Date()
      var tick = () => {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400
        last = +new Date()

        if (+el.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
      }

      tick()
    }

    fadeIn(QRBox)

    // QRBox.fadeIn(300, argument => {
      MainBox.classList.add('showQR')
    // })
  }

  const clicks = event => {
    const thisID = event.target.id

    typeof window.ga === 'function' && window.ga('send', 'event', 'button', 'click', thisID)

    if (thisID === 'BTCBn') {
      showQR(BTCQR)
      const inputhidden = document.getElementById(event.target.dataset.clipboardTarget)
      new Clipboard('#BTC', {
        text (trigger) {
          return inputhidden.value
        }
      })
    }

    if (thisID === 'LTCBn') {
      showQR(LTCQR)
      const inputhidden = document.getElementById(event.target.dataset.clipboardTarget)
      new Clipboard('#LTC', {
        text (trigger) {
          return inputhidden.value
        }
      })
    }
  }

  document.getElementById('PayPal').addEventListener('click', clicks)
  document.getElementById('LTC').addEventListener('click', clicks)
  document.getElementById('BTC').addEventListener('click', clicks)

  MainBox.click(event => {
    MainBox.removeClass('showQR').addClass('hideQR')

    setTimeout(() => {
      QRBox.fadeOut(300, argument => {
        MainBox.removeClass('hideQR')
      })
      const donateBox = document.getElementById('donateBox')

      if (donateBox.classList) {
        donateBox.classList.remove('blur')
      } else {
        donateBox.className = donateBox.className.replace(new RegExp('(^|\\b)' + 'blur'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
    }, 600)
  })
})
