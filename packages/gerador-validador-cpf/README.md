# gerador-validador-cpf

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests\&logo=githubactions\&logoColor=white\&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg?logo=coveralls\&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![mutation score](https://img.shields.io/endpoint?style=flat-square\&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

Biblioteca JS para gerar e validar CPF (Cadastro de Pessoas Físicas) do Brasil.

## Docs 📚

Leia em outros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.en.md), [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.es.md) e Português(Brasil)

## Playground 🎮

<https://tiagoporto.github.io/gerador-validador-cpf>

## Instalação 📦

```bash
npm install gerador-validador-cpf --save
```

## Uso ➡️

### Gerando CPF

```javascript
import { generate } from 'gerador-validador-cpf'

generate() // Gera um CPF no formato 00000000000
generate({ format: true }) // Gera um CPF no formato 000.000.000-00
```

### Validando CPF

```javascript
import { validate } from 'gerador-validador-cpf'

validate('12345678900')
// ou
validate('123.456.789-00')
```

**Obs.** os caracteres `.`, `-` e `espaço`, são ignorados na validação.
