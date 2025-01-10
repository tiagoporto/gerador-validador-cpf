# gerador-validador-cpf

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![mutation score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

JS lib para generar y validar CPF (Cadastro de Pessoas Físicas) en Brasil.

## Docs 📚

Leer en otros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.en.md), Español y [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.md)

## Playground 🎮

<https://tiagoporto.github.io/gerador-validador-cpf/>

## Instalación 📦

```bash
npm install gerador-validador-cpf --save
```

## Uso ➡️

### Generar CPF

```javascript
import { generate } from 'gerador-validador-cpf'

generate() // Generates a CPF in the format 00000000000
generate({ format: true }) // Generates a CPF in the format 000.000.000-00
```

### Validar CPF

```javascript
import { validate } from 'gerador-validador-cpf'

validate('123.456.789-00')
// or
validate('123.456.789-00')
```

**Nota:** se permiten caracteres como `.`, `-` y `space`.
