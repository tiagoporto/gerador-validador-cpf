jQuery(document).ready(() => {
  const QRBox = $('#QRBox')
  const MainBox = $('#MainBox')
  const BTCQR = 'img/BTCQR.png'

  function showQR (QR) {
    if (QR) {
      MainBox.css('background-image', `url('${QR}')`)
    }

    $('#DonateText,#donateBox,#github').addClass('blur')
    QRBox.fadeIn(300, function (argument) {
      MainBox.addClass('showQR')
    })
  }

  $('#donateBox>li').click(function (event) {
    const thisID = $(this).attr('id')

    if (thisID === 'BTC') {
      showQR(BTCQR)
      new Clipboard('#BTCBn')
    }
  })

  MainBox.click(function (event) {
    MainBox.removeClass('showQR').addClass('hideQR')

    setTimeout (function (a) {
      QRBox.fadeOut(300, function(argument) {
        MainBox.removeClass('hideQR')
      })
      $('#DonateText,#donateBox,#github').removeClass('blur')
    }, 600)
  })
})
