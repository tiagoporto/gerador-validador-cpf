# gerador-validador-cnpj

JS lib para generar y validar CNPJ alfanumérico en Brasil.

## Docs

Leer en otros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.en.md), Español y [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.md)

## Playground

TODO

## Instalación

Instalar con npm:

```bash
npm install gerador-validador-cnpj
```

Instalar con deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cnpj
```

## Uso

### Generar CNPJ

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

### Validar CNPJ

```js
import { validate as validadeCNPJ } from 'gerador-validador-cnpj'
// jsr import from "@tiagoporto/gerador-validador-cnpj"

const isCNPJValid = validadeCNPJ('01234567890000')
const isCNPJAlphanumericValid = validadeCNPJ('9ZW2JIM2OWTG85')
const isFormattedCNPJValid = validadeCNPJ('01.234.567/8900-00')
const isFormattedCNPJAlphanumericValid = validadeCNPJ('8I.S4O.LPO/PRD7-81')
```

## License

Gerador Validador CNPJ © 2025 por Tiago Porto tiene la [licencia MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
