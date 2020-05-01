import React, { FC, useState } from 'react'
import BTCQR from './img/BTCQR.png'
import CopyToClipboard from 'react-copy-to-clipboard'

export const Donate: FC = () => {
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  const toggleCodeVisibility = (): void => {
    // typeof window.ga === 'function' &&
    //   window.ga('send', 'event', 'button', 'click', thisID)
    setIsCodeVisible(!isCodeVisible)
  }

  return (
    <div className="donation">
      <p>
        Este projeto é mantido no meu pouco tempo livre, se foi útil para você
        dê um{' '}
        <a
          href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers"
          title="Stargazers · tiagoporto/gerador-validador-cpf"
        >
          ★
        </a>
        , qualquer doação é bem vinda.
      </p>

      <ul className={`donate-list ${isCodeVisible ? 'blur' : ''}`}>
        <li>
          <a
            id="PayPal"
            data-footnote="Abre a página do Paypal"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>
        </li>

        <li>
          <CopyToClipboard text="3DztnDvY7McQ7zwGS8Vjafsbc1ee1HDAmE">
            <button
              id="BTC"
              onClick={toggleCodeVisibility}
              data-footnote="Copia o número da carteira e exibe o QRCode"
            >
              Bitcoin
            </button>
          </CopyToClipboard>
        </li>
      </ul>

      <div id="QRBox" style={{ display: isCodeVisible ? 'block' : 'none' }}>
        <img
          src={BTCQR}
          onClick={toggleCodeVisibility}
          id="MainBox"
          className={isCodeVisible ? 'showQR' : 'hideQR'}
        />
      </div>
    </div>
  )
}
