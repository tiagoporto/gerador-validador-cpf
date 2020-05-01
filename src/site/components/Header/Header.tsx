import styles from './Header.module.styl'
import React, { FC } from 'react'
import { Donate } from '../Donate'
import GithubCorner from 'react-github-corner'

export const Header: FC = () => (
  <header className={styles.panel}>
    <GithubCorner
      href="https://github.com/tiagoporto/gerador-validador-cpf/"
      size={80}
      bannerColor="#fff"
      octoColor="#155078"
      ariaLabel="Página do projeto no github"
    />

    <h1 className={styles.panelTitle}>
      {/* <svg
        className={styles.logo}"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 191 192"
      >
        <g fill="#FFF">
          <path d="M133.7 107.2l9.9-59.8L98.8 0 57.2 43.6l61.5 8.8" />
          <path d="M83.8 134.6l59.8 10L191 99.3l-43.6-42-8.7 62.1" />
          <path d="M58 84.8l-12.1 59.8L89.4 192l43.3-43.6-61.6-8.8" />
          <path d="M109.1 57.5L49.2 47.4 0 92.7l42.5 41.9 10.9-62" />
        </g>
      </svg> */}
      <span>Gerador e</span> validador de CPF
    </h1>

    <p>Lib JS open-source para gerar e validar CPF.</p>
    <pre>
      <code className="hljs" style={{ display: 'inline-block' }}>
        npm install gerador-validador-cpf --save
      </code>
    </pre>

    <Donate />
  </header>
)
