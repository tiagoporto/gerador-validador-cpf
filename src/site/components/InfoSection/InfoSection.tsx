import styles from './InfoSection.module.styl'
import { useTranslation, Trans } from 'react-i18next'

export const InfoSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.infoSection}>
      <div className={styles.center}>
        <p>{t('info.disclaimer')}</p>

        <Trans
          i18nKey={'info.algorithm'}
          components={[
            <a key="link" href="http://www.geradorcpf.com/algoritmo_do_cpf.htm">
              mock
            </a>,
          ]}
        />

        <p>
          <Trans
            i18nKey={'info.disclaimerValidCPF'}
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

        <p>{t('info.cpfByState')}</p>

        <blockquote>
          <Trans
            i18nKey={'info.example'}
            components={[<strong key="strong" />]}
          />
        </blockquote>

        <p>{t('info.codeByState')}</p>

        <ol className={styles.list}>
          {Array.from({ length: 10 }).map((value, index) => (
            <li key={`item${index}`}>
              {t(`info.stateCode${index + 1}` as 'info.stateCode1')}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
