# gerador-validador-cpf

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![mutation score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

JS lib to generate and validate CPF (Cadastro de Pessoas Físicas) of Brazil.

## Docs 📚

Read in other languages: English, [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.es.md) and [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.md)

## Playground 🎮

<https://tiagoporto.github.io/gerador-validador-cpf/>

## Installation 📦

```bash
npm install gerador-validador-cpf --save
```

## Usage ➡️

### Generate CPF

```javascript
import { generate } from 'gerador-validador-cpf'

generate() // Generates a CPF in the format 00000000000
generate({ format: true }) // Generates a CPF in the format 000.000.000-00
```

### Validate CPF

```javascript
import { validate } from 'gerador-validador-cpf'

validate('123.456.789-00')
// or
validate('123.456.789-00')
```

**Note:** characters like `.`, `-` and `space` are allowed.
