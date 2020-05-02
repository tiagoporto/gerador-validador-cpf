import styles from './Header.module.styl'
import React, { FC } from 'react'
import GithubCorner from 'react-github-corner'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Donate } from '../Donate'
import { toast } from 'react-toastify'

export const Header: FC = () => {
  const handleCopy = (): void => {
    toast('Copiado!')
  }

  return (
    <header className={styles.panel}>
      <GithubCorner
        href="https://github.com/tiagoporto/gerador-validador-cpf/"
        size={80}
        bannerColor="#fff"
        octoColor="#155078"
        ariaLabel="Página do projeto no github"
      />

      <h1 className={styles.panelTitle}>
        <span>Gerador e</span> validador de CPF
      </h1>

      <p>Lib JS open-source para gerar e validar CPF.</p>

      <CopyToClipboard
        text="npm install gerador-validador-cpf --save"
        onCopy={handleCopy}
      >
        <pre>
          <code className={`${styles.copy} hljs`}>
            npm install gerador-validador-cpf --save
          </code>
        </pre>
      </CopyToClipboard>

      <Donate />
    </header>
  )
}
