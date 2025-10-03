# gerador-validador-cpf

JS lib to generate and validate CPF (Cadastro de Pessoas Físicas) of Brazil.

## Docs

Read in other languages: English, [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.es.md) and [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.md)

## Playground

<https://tiagoporto.github.io/gerador-validador-cpf/>

## Installation

Install with npm:

```bash
npm install gerador-validador-cpf
```

Install with deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cpf
```

## Usage

### Generate CPF

```js
import { generate as generateCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const cpf = generateCpf()
console.log(cpf) // 00000000000

const formattedCpf = generateCpf({ format: true })
console.log(formattedCpf) // 000.000.000-00
```

### Validate CPF

```js
import { validate as validadeCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const isCpfValid = validadeCpf('12345678900')
const isFormattedCpfValid = validadeCpf('123.456.789-00')
```

## License

Gerador Validador CPF © 2015 by Tiago Porto is licensed under [MIT License](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
