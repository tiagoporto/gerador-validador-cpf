# gerador-validador-cpf

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Mutation Score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

JS lib to generate and validate CPF (Cadastro de Pessoas Físicas) of Brazil.

## Docs

Read in other languages: English, [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.es.md) and [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.md)

## Playground

<https://tiagoporto.com/gerador-validador-cpf/>

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

This project is licensed under the [MIT License](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
