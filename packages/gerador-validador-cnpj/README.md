# gerador-validador-cnpj

Biblioteca JS para gerar e validar CNPJ Alfanumérico do Brasil.

> [Novo CNPJ Alfanumérico](https://tiagoporto.com/pt-br/blog/novo-cnpj-seu-codigo-esta-preparado-para-a-mudanca/)
>
> A Receita Federal modificou o algoritmo do CNPJ para comportar caracteres
> alfanuméricos devido a eminente possibilidade de esgotamento dos atuais números.
> A modificação começa a valer a partir de Julho de 2026.
>
> **Números atuais continuam válidos**. Leia mais em [compatibilidade](#compatibilidade).

## Docs

Leia em outros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.en.md), [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.es.md) e Português(Brasil)

## Playground

TODO

## Instalação

Instalação com npm:

```bash
npm install gerador-validador-cnpj
```

Instalação com deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cnpj
```

## Uso

### Gerando CNPJ

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

### Validando CNPJ

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

## Licença

Gerador Validador CNPJ © 2025 de Tiago Porto está licenciado sob a [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
