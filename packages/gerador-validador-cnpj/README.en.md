# gerador-validador-cnpj

JS lib to generate and validate Alphanumeric CNPJ of Brazil.

> [New alphanumeric CNPJ](https://tiagoporto.com/en/blog/new-brazilian-cnpj-is-your-code-ready-for-the-change/)
>
> The Brazilian Federal Revenue has modified the CNPJ algorithm to include
> alphanumeric characters due to the imminent the possibility of the current
> numbers running out.
> The change takes effect from July 2026.
>
> **Current numbers remain valid.**. [Read more](https://github.com/tiagoporto/gerador-validador-cpf/issues/102).

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

## License

Gerador Validador CNPJ © 2025 by Tiago Porto is licensed under [MIT License](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
