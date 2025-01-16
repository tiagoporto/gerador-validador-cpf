# gerador-validador-cpf

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![mutation score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

Biblioteca JS para gerar e validar CPF (Cadastro de Pessoas Físicas) do Brasil.

## Docs

Leia em outros idiomas: [English](README.en.md), [Español](README.es.md) e Português(Brasil)

## Playground

<https://tiagoporto.github.io/gerador-validador-cpf/>

## Instalação

Instalação com npm:

```bash
npm install gerador-validador-cpf
```

Instalação com deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cpf
```

## Uso

### Gerando CPF

```javascript
import { generate as generateCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const cpf = generateCpf()
console.log(cpf) // 00000000000

const formattedCpf = generateCpf({ format: true })
console.log(formattedCpf) // 000.000.000-00
```

### Validando CPF

```javascript
import { validate as validadeCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const isCpfValid = validadeCpf('12345678900')
const isFormattedCpfValid = validadeCpf('123.456.789-00')
```

## Licença

Este projeto está licenciado sob a [licença MIT](LICENSE).
