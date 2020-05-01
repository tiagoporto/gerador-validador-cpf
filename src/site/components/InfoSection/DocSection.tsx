import styles from './InfoSection.module.styl'
import React, { FC } from 'react'

export const InfoSection: FC = () => (
  <section>
    <h2>Obs</h2>
    <p>
      Lib disponível para auxiliar desenvolvedores em testes de software, não
      possui qualquer vínculo com a Receita Federal do Brasil.
    </p>

    <p>
      Utiliza o seguinte{' '}
      <a href="http://www.geradorcpf.com/algoritmo_do_cpf.htm">algoritmo</a>.
    </p>

    <p>
      Um CPF válido não significa que ele exista no Cadastro Nacional de Pessoas
      Físicas, nem que esteja ativo ou com situação cadastral regular. Para
      conferir tais dados, consulte o site oficial da{' '}
      <a href="http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp">
        Secretaria da Receita Federal do Brasil
      </a>
      .
    </p>

    <p>
      O CPF guarda o estado brasileiro de onde foi emitido, esse número
      corresponde ao último algarismo anterior aos dois dígitos verificadores.
    </p>

    <blockquote>
      Exemplo: CPF <strong>XXX.XXX.XX8-XX</strong>, o número 8 corresponde ao
      estado de São Paulo.
    </blockquote>

    <p>Códigos correspondentes aos estados brasileiros:</p>

    <ol className={styles.list}>
      <li>1. Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;</li>
      <li>2. Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;</li>
      <li>3. Ceará, Maranhão e Piauí;</li>
      <li>4. Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;</li>
      <li>5. Bahia e Sergipe;</li>
      <li>6. Minas Gerais;</li>
      <li>7. Rio de Janeiro e Espírito Santo;</li>
      <li>8. São Paulo;</li>
      <li>9. Paraná e Santa Catarina;</li>
      <li>0. Rio Grande do Sul.</li>
    </ol>
  </section>
)
