# gerador-validador-cnpj

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Mutation Score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

JS lib to generate and validate Alphanumeric CNPJ of Brazil.

> [New alphanumeric CNPJ](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/cnpj-alfanumerico)
>
> The Brazilian Federal Revenue has modified the CNPJ algorithm to include
> alphanumeric characters due to the imminent the possibility of the current
> numbers running out.
> The change takes effect from July 2026.
>
> **Current numbers remain valid.**. Read more in [compatibility](#compatibility).

## Docs

Read in other languages: English, [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.es.md) and [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.md)

## Playground

TODO

## Installation

Install with npm:

```bash
npm install gerador-validador-cnpj
```

Install with deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cnpj
```

## Usage

### Generate CNPJ

```js
import { generate as generateCNPJ } from 'gerador-validador-cnpj'
// jsr import from "@tiagoporto/gerador-validador-cnpj"

const cnpj = generateCNPJ()
console.log(cnpj) // 00000000000000

const formattedCNPJ = generateCNPJ({ format: true })
console.log(formattedCNPJ) // 00.000.000/0000-00

// alphanumeric default is false
const alphanumericCNPJ = generateCNPJ({ alphanumeric: true })
console.log(alphanumericCNPJ) // W3.U42.DFI/PRD7-00
```

### Validate CNPJ

```js
import { validate as validadeCNPJ } from 'gerador-validador-cnpj'
// jsr import from "@tiagoporto/gerador-validador-cnpj"

const isCNPJValid = validadeCNPJ('01234567890000')
const isCNPJAlphanumericValid = validadeCNPJ('9ZW2JIM2OWTG85', {
  validateAlphanumeric: true
})
const isFormattedCNPJValid = validadeCNPJ('01.234.567/8900-00')
const isFormattedCNPJAlphanumericValid = validadeCNPJ('8I.S4O.LPO/PRD7-81', {
  validateAlphanumeric: true
})
```

#### Compatibility

In order to force the validation of non-alpha numeric CNPJs until July 2026 and
don’t break systems, the `validateAlphanumeric` option will be available until
June 2026, being removed in July 2026 once the new CNPJs come into force.

`validateAlphanumeric` default is `false`.

## License

This project is licensed under the [MIT License](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
