import 'highlight.js/styles/github.css'
import CopyToClipboard from 'react-copy-to-clipboard'
import GithubCorner from 'react-github-corner'
import { Trans, useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { ChangeLocale } from './components/ChangeLocale'
import { Donate } from './components/Donate'
import styles from './Header.module.scss'

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
        <Trans
          i18nKey={'header.title'}
          components={{
            span: <span />,
            abbreviation: <abbr title={t('header.cpf')} />,
          }}
        />
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
