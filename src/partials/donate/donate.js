import './donation.styl'
import Clipboard from 'clipboard'
import $ from 'jquery'

$(document).ready(() => {
  const QRBox = $('#QRBox')
  const MainBox = $('#MainBox')

  const showQR = QR => {
    QR && MainBox.css('background-image', `url('${QR}')`)

    $('.donate-list').addClass('blur')

    QRBox.fadeIn(300, () => {
      MainBox.addClass('showQR')
    })
  }

  $('#BTC,#LTC,PayPal').click(event => {
    const thisID = event.currentTarget.id
    typeof window.ga === 'function' &&
      window.ga('send', 'event', 'button', 'click', thisID)

    if (thisID === 'BTC') {
      showQR('img/BTCQR.png')
      // eslint-disable-next-line no-new
      new Clipboard('#BTC')
    }

    if (thisID === 'LTC') {
      showQR('img/LTCQR.png')
      // eslint-disable-next-line no-new
      new Clipboard('#LTC')
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
