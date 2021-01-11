import styles from './InfoSection.module.styl'
import { useTranslation, Trans } from 'react-i18next'
import i18nResources from '@i18n/app.json'

export const InfoSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.infoSection}>
      <div className={styles.center}>
        <p>{t(i18nResources.info.disclaimer)}</p>

        <Trans
          i18nKey={i18nResources.info.algorithm}
          components={[
            <a key="link" href="http://www.geradorcpf.com/algoritmo_do_cpf.htm">
              mock
            </a>,
          ]}
        />

        <p>
          <Trans
            i18nKey={i18nResources.info.disclaimerValidCPF}
            components={[
              <a
                key="link"
                href="http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp"
              >
                mock
              </a>,
            ]}
          />
        </p>

        <p>{t(i18nResources.info.cpfByState)}</p>

        <blockquote>
          <Trans
            i18nKey={i18nResources.info.example}
            components={[<strong key="strong" />]}
          />
        </blockquote>

        <p>{t(i18nResources.info.codeByState)}</p>

        <ol className={styles.list}>
          {[...new Array(10).keys()].map((index) => (
            <li key={`item${index}`}>
              {t(i18nResources.info[`stateCode${index + 1}` as 'stateCode1'])}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
