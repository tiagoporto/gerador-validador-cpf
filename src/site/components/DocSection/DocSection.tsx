import styles from './DocSection.module.styl'
import React, { FC } from 'react'

export const DocSection: FC = () => (
  <section>
    <p>
      Disponibilizo está ferramenta para auxiliar outros desenvolvedores em
      testes de software, não possui qualquer vínculo com a Receita Federal do
      Brasil.
    </p>

    <p>
      A ferramenta utiliza o seguinte{' '}
      <a href="http://www.geradorcpf.com/algoritmo_do_cpf.htm">algoritmo</a>{' '}
      para verificação e geração do CPF.
    </p>

    <p>
      Um CPF declarado como válido por essa ferramenta não significa que ele
      exista no Cadastro Nacional de Pessoas Físicas, nem que seja um número
      ativo ou com situação cadastral regular. Para conferir tais dados,
      consulte o site oficial da{' '}
      <a href="http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp">
        Secretaria da Receita Federal do Brasil
      </a>
      .
    </p>

    <p>
      O número CPF guarda o estado de onde foi emitido, esse número corresponde
      ao último algarismo anterior aos dois dígitos verificadores.
    </p>

    <p>
      Um exemplo de CPF nº 000.000.008-00, o número 8 corresponde ao estado de
      São Paulo.
    </p>

    <p>Veja abaixo os códigos correspondentes aos estados brasileiros:</p>

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

    <h2>Lib</h2>

    <p>
      Documentação em{' '}
      <a href="https://github.com/tiagoporto/gerador-validador-cpf">
        https://github.com/tiagoporto/gerador-validador-cpf
      </a>
    </p>
  </section>
)
