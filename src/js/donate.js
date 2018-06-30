/* global ga */

jQuery(document).ready(() => {
  const QRBox = $('#QRBox')
  const MainBox = $('#MainBox')
  const BTCQR = 'img/BTCQR.png'
  const LTCQR = 'img/LTCQR.png'
  const showQR = QR => {
    QR && MainBox.css('background-image', `url('${QR}')`)

    $('#DonateText,#donateBox,#github').addClass('blur')
    QRBox.fadeIn(300, argument => {
      MainBox.addClass('showQR')
    })
  }

  $('#donateBox>li').click(function (event) {
    const thisID = $(this).attr('id')

    typeof ga === 'function' && ga('send', 'event', 'button', 'click', thisID)

    if (thisID === 'BTC') {
      showQR(BTCQR)
      const inputhidden = $($(this).attr('data-clipboard-target'))
      new Clipboard('#BTC', {
        text (trigger) {
          return inputhidden.val()
        }
      })
    }

    if (thisID === 'LTC') {
      showQR(LTCQR)
      const inputhidden = $($(this).attr('data-clipboard-target'))
      new Clipboard('#LTC', {
        text (trigger) {
          return inputhidden.val()
        }
      })
    }
  })

  MainBox.click(event => {
    MainBox.removeClass('showQR').addClass('hideQR')

    setTimeout(() => {
      QRBox.fadeOut(300, argument => {
        MainBox.removeClass('hideQR')
      })
      $('#DonateText,#donateBox,#github').removeClass('blur')
    }, 600)
  })
})
