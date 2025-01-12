import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyToClipboard from 'react-copy-to-clipboard'
import GithubCorner from 'react-github-corner'
import { Trans, useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { ChangeLocale } from './components/ChangeLocale'
import { Donate } from './components/Donate'
import styles from './Header.module.scss'

export const Header = () => {
  const { t } = useTranslation()

  const handleCopy = () => {
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
        target="_blank"
        rel="noopener noreferrer"
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
        <SyntaxHighlighter
          language="base"
          style={github}
          className={styles.copy}
        >
          npm install gerador-validador-cpf --save-dev
        </SyntaxHighlighter>
      </CopyToClipboard>

      <Donate />
    </header>
  )
}
