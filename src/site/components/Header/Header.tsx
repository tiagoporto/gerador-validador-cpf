import styles from './Header.module.styl'
import React, { FC } from 'react'
import GithubCorner from 'react-github-corner'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import i18nResources from '@i18nResources'
import { useTranslation } from 'react-i18next'
import { Donate } from '../Donate'
import { ChangeLocale } from '../ChangeLocale'

export const Header: FC = () => {
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
        <span>Gerador e</span> validador de CPF
      </h1>

      <p>{t(i18nResources.header.libInfo)}</p>

      <CopyToClipboard
        text="npm install gerador-validador-cpf --save"
        onCopy={handleCopy}
      >
        <pre>
          <code className={`${styles.copy} hljs`}>
            npm install gerador-validador-cpf --save-dev
          </code>
        </pre>
      </CopyToClipboard>

      <Donate />
    </header>
  )
}
