import styles from './Header.module.styl'
import GithubCorner from 'react-github-corner'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import i18nResources from '@i18n/app.json'
import { useTranslation } from 'react-i18next'
import { Donate } from '../Donate'
import { ChangeLocale } from '../ChangeLocale'
import 'highlight.js/styles/github.css'

export const Header = () => {
  const { t } = useTranslation()

  const handleCopy = (): void => {
    toast(t(i18nResources.messages.copied))
  }

  return (
    <header className={styles.panel}>
      <ChangeLocale />
      <GithubCorner
        href="https://github.com/tiagoporto/gerador-validador-cpf/"
        size={80}
        bannerColor="#fff"
        octoColor="#155078"
        ariaLabel={t(i18nResources.header.projectPageGithub)}
      />

      <h1 className={styles.panelTitle}>
        <span>Gerador e</span> validador de{' '}
        <abbr title="Cadastro de Pessoas Físicas">CPF</abbr>
      </h1>

      <p>{t(i18nResources.header.libInfo)}</p>

      <CopyToClipboard
        text="npm install gerador-validador-cpf --save"
        onCopy={handleCopy}
      >
        <pre className={styles.copy}>
          <code className="hljs">
            npm install gerador-validador-cpf --save-dev
          </code>
        </pre>
      </CopyToClipboard>

      <Donate />
      {/* <p style={{ textAlign: 'center' }}>
        <a
          className={styles.docButton}
          href="https://github.com/tiagoporto/gerador-validador-cpf"
        >
          DOC
        </a>
      </p> */}
    </header>
  )
}
