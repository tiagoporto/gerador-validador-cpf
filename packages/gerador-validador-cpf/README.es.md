# gerador-validador-cpf

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![mutation score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

JS lib para generar y validar CPF (Cadastro de Pessoas Físicas) en Brasil.

## Docs

Leer en otros idiomas: [English](README.en.md), Español y [Português(Brasil)](README.md)

## Playground

<https://tiagoporto.github.io/gerador-validador-cpf/>

## Instalación

Instalar con npm:

```bash
npm install gerador-validador-cpf
```

Instalar con deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cpf
```

## Uso

### Generar CPF

```javascript
import { generate as generateCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const cpf = generateCpf()
console.log(cpf) // 00000000000

const formattedCpf = generateCpf({ format: true })
console.log(formattedCpf) // 000.000.000-00
```

### Validar CPF

```javascript
import { validate as validadeCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const isCpfValid = validadeCpf('12345678900')
const isFormattedCpfValid = validadeCpf('123.456.789-00')
```

## License

Este proyecto está licenciado bajo la [licencia MIT](LICENSE).
