import React, { FC, useEffect } from 'react'
// @ts-expect-error
import hljs from 'highlight.js/lib/core.js'
import javascript from 'highlight.js/lib/languages/javascript.js'
import 'highlight.js/styles/github.css'
hljs.registerLanguage('js', javascript)

export const DocSection: FC = () => {
  useEffect(() => {
    hljs.initHighlighting()
  }, [])
  return (
    <section>
      <h2>Uso</h2>

      <pre>
        <code className="hljs js">
          {`import { generate, validate } from 'gerador-validador-cpf'

generate()
validate('123.456.789-00')`}
        </code>
      </pre>

      <p>
        Documentação completa em{' '}
        <a href="https://github.com/tiagoporto/gerador-validador-cpf">
          github.com/tiagoporto/gerador-validador-cpf
        </a>
      </p>
    </section>
  )
}
