import './donation.styl'
import Clipboard from 'clipboard'
import $ from 'jquery'

$(document).ready(() => {
  const QRBox = $('#QRBox')
  const MainBox = $('#MainBox')

  const showQR = QR => {
    QR && MainBox.css('background-image', `url('${QR}')`)

    $('#donateBox').addClass('blur')

    QRBox.fadeIn(300, argument => {
      MainBox.addClass('showQR')
    })
  }

  $('#BTC,#LTC,PayPal').click(event => {
    const thisID = event.currentTarget.id
    typeof window.ga === 'function' && window.ga('send', 'event', 'button', 'click', thisID)

    if (thisID === 'BTC') {
      showQR('img/BTCQR.png')
      new Clipboard('#BTC')
    }

    if (thisID === 'LTC') {
      showQR('img/LTCQR.png')
      new Clipboard('#LTC')
    }
  })

  MainBox.click(event => {
    MainBox.removeClass('showQR').addClass('hideQR')

    setTimeout(() => {
      QRBox.fadeOut(300, argument => { MainBox.removeClass('hideQR') })
      $('#donateBox').removeClass('blur')
    }, 600)
  })
})
