import './donation.styl'
import Clipboard from 'clipboard'
import $ from 'jquery'
import BTCQR from '../../img/BTCQR.png'

$(document).ready(() => {
  const QRBox = $('#QRBox')
  const MainBox = $('#MainBox')

  const showQR = QR => {
    QR && MainBox.attr('src', QR)

    $('.donate-list').addClass('blur')

    QRBox.fadeIn(300, () => {
      MainBox.addClass('showQR')
    })
  }

  $('#BTC,PayPal').click(event => {
    const thisID = event.currentTarget.id
    typeof window.ga === 'function' &&
      window.ga('send', 'event', 'button', 'click', thisID)

    if (thisID === 'BTC') {
      showQR(BTCQR)
      // eslint-disable-next-line no-new
      new Clipboard('#BTC')
    }
  })

  MainBox.click(() => {
    MainBox.removeClass('showQR').addClass('hideQR')

    setTimeout(() => {
      QRBox.fadeOut(300, () => {
        MainBox.removeClass('hideQR')
      })
      $('.donate-list').removeClass('blur')
    }, 600)
  })
})
