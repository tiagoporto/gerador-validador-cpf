import styles from './Header.module.styl'
import GithubCorner from 'react-github-corner'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { Donate } from './components/Donate'
import { ChangeLocale } from './components/ChangeLocale'
import 'highlight.js/styles/github.css'

export const Header = () => {
  const { t } = useTranslation()

  const handleCopy = (): void => {
    toast(t('messages.copied'))
  }

  return (
    <header className={styles.panel}>
      <ChangeLocale />
      <GithubCorner
        href="https://github.com/tiagoporto/gerador-validador-cpf/"
        size={80}
        bannerColor="#fff"
        octoColor="#155078"
        ariaLabel={t('header.projectPageGithub')}
      />

      <h1 className={styles.panelTitle}>
        <span>Gerador e</span> validador de{' '}
        <abbr title="Cadastro de Pessoas Físicas">CPF</abbr>
      </h1>

      <p>{t('header.libInfo')}</p>

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
    </header>
  )
}
