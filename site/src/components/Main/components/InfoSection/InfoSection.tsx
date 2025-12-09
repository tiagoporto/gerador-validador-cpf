import { Adsense } from '@ctrl/react-adsense'
import { Trans, useTranslation } from 'react-i18next'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import * as styles from './InfoSection.module.scss'

export const InfoSection = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.infoSection}>
      <div className={styles.center}>
        <h2>{t('info.usage')}</h2>

        <h3>{t('info.generate')}</h3>

        <SyntaxHighlighter language="javascript" style={github}>
          {`import { generate as generateCpf } from 'gerador-validador-cpf'

const cpf = generateCpf()
console.log(cpf) // 00000000000

const formattedCpf = generateCpf({ format: true })
console.log(formattedCpf) // 000.000.000-00`}
        </SyntaxHighlighter>

        <h3>{t('info.validate')}</h3>

        <SyntaxHighlighter language="javascript" style={github}>
          {`import { validate as validadeCpf } from 'gerador-validador-cpf'

const isCpfValid = validadeCpf('12345678900')
const isFormattedCpfValid = validadeCpf('123.456.789-00')`}
        </SyntaxHighlighter>

        <p>{t('info.disclaimer')}</p>

        <Trans
          i18nKey="info.algorithm"
          components={[
            <a
              key="link"
              href="https://www.geradorcpf.com/algoritmo_do_cpf.htm"
            >
              mock
            </a>,
          ]}
        />

        <p>
          <Trans
            i18nKey="info.disclaimerValidCPF"
            components={[
              <a
                key="link"
                href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp"
              >
                mock
              </a>,
            ]}
          />
        </p>

        <p>{t('info.cpfByState')}</p>

        <blockquote>
          <Trans
            i18nKey="info.example"
            components={[<strong key="strong" />]}
          />
        </blockquote>

        <p>{t('info.codeByState')}</p>

        <ol className={styles.list}>
          {Array.from({ length: 10 }).map((value, index) => (
            <li key={`item${index + 1}`}>
              {t(`info.stateCode${index + 1}` as 'info.stateCode1')}
            </li>
          ))}
        </ol>

        {typeof process.env.ADSENSE === 'string' && (
          <Adsense client={process.env.ADSENSE} slot="3100600194" />
        )}
      </div>
    </div>
  )
}
