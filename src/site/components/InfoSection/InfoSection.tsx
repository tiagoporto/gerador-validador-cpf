import styles from './InfoSection.module.styl'
import React, { FC } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import i18nResources from '@i18nResources'

export const InfoSection: FC = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.infoSection}>
      <div className={styles.center}>
        <p>{t(i18nResources.info.disclaimer)}</p>

        <Trans
          i18nKey={i18nResources.info.algorithm}
          components={[
            <a
              key="link"
              href="http://www.geradorcpf.com/algoritmo_do_cpf.htm"
            />,
          ]}
        />

        <p>
          <Trans
            i18nKey={i18nResources.info.disclaimerValidCPF}
            components={[
              <a
                key="link"
                href="http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp"
              />,
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
          {Array.from(Array(10).keys()).map((i) => (
            <li key={`item${i}`}>
              {t(i18nResources.info[`stateCode${i + 1}` as 'stateCode1'])}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
