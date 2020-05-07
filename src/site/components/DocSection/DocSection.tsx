import styles from './DocSection.module.styl'
import React, { FC, useEffect } from 'react'
// @ts-expect-error
import hljs from 'highlight.js/lib/core.js'
import javascript from 'highlight.js/lib/languages/javascript.js'
import 'highlight.js/styles/github.css'
import i18nResources from '@i18nResources'
import { useTranslation, Trans } from 'react-i18next'

hljs.registerLanguage('js', javascript)

export const DocSection: FC = () => {
  const { t } = useTranslation()

  useEffect(() => {
    hljs.initHighlighting()
  }, [])
  return (
    <section>
      <h2>{t(i18nResources.docs.title)}</h2>

      <pre className={styles.code}>
        <code className="hljs js">
          {`import { generate, validate } from 'gerador-validador-cpf'

const cpf = generate()
const isValidCPF = validate('123.456.789-00')`}
        </code>
      </pre>

      <p>
        <Trans
          i18nKey={i18nResources.docs.fullDocumentation}
          components={[
            <a
              key="link"
              href="https://github.com/tiagoporto/gerador-validador-cpf"
            />,
          ]}
        />
      </p>
    </section>
  )
}
