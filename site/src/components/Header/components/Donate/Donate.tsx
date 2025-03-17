import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import codeStyles from './Code.module.scss'
import styles from './Donation.module.scss'
import BTCQR from './img/BTCQR.png'

const trackClick = (label: string) => () => {
  if (process.env.NODE_ENV === 'production' && globalThis.gtag) {
    globalThis.gtag('event', 'cpf', {
      event_label: label,
    })
  }
}

export const Donate = () => {
  const { t } = useTranslation()
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  const handleCopy = () => {
    toast(t('messages.walletCopied'))
  }

  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible)
  }

  const handleClick = (trackLabel: string) => () => {
    trackClick(trackLabel)()
    toggleCodeVisibility()
  }

  return (
    <div className="donation">
      <ul className={`${styles.list} ${isCodeVisible ? styles.blur : ''}`}>
        <li>
          <a
            className={`${styles.button} ${styles.buttonPaypal}`}
            onClick={trackClick('Donate (Paypal)')}
            aria-label={t('donate.contributePaypal')}
            data-footnote={t('donate.contributePaypal')}
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>
        </li>

        <li>
          <CopyToClipboard
            // eslint-disable-next-line no-secrets/no-secrets
            text="14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp"
            onCopy={handleCopy}
          >
            <button
              className={`${styles.button} ${styles.buttonBitcoin}`}
              onClick={handleClick('Donate (Bitcoin)')}
              aria-label={t('donate.contributeBitcoin')}
              data-footnote={t('donate.contributeBitcoin')}
            >
              Bitcoin
            </button>
          </CopyToClipboard>
        </li>
      </ul>

      <div
        className={codeStyles.codeBox}
        style={{ display: isCodeVisible ? 'block' : 'none' }}
      >
        <img
          role="presentation"
          alt="QRCode Bitcoin Wallet"
          src={BTCQR}
          onKeyDown={toggleCodeVisibility}
          onClick={toggleCodeVisibility}
          className={`${codeStyles.code} ${
            isCodeVisible ? codeStyles.showCode : codeStyles.hideCode
          }`}
        />
      </div>
    </div>
  )
}
