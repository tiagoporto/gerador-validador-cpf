# Gerador e Validador de CPF ![Open Source Love](https://raw.githubusercontent.com/ellerbrock/open-source-badges/master/badges/open-source-v3/open-source.svg?sanitize=true)

<p align="right">
  <code>CURTIU ? Deixe um <a href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/gerador-validador-cpf/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/gerador-validador-cpf.svg?style=flat-square&label=release)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
![npm type definitions](https://img.shields.io/npm/types/gerador-validador-cpf.svg?style=flat-square)
[![install size](https://packagephobia.now.sh/badge?p=gerador-validador-cpf)](https://packagephobia.now.sh/result?p=gerador-validador-cpf)
[![bundle size](https://img.shields.io/bundlephobia/min/gerador-validador-cpf?style=flat-square&label=bundle%20size)](https://bundlephobia.com/result?p=gerador-validador-cpf)
[![License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/LICENSE)

Cobertura

[![Build Status](https://img.shields.io/travis/com/tiagoporto/gerador-validador-cpf/master.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Mutation testing cover](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Ftiagoporto%2Fgerador-validador-cpf%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/master)

Estatísticas

[![Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/gerador-validador-cpf)

[![Dependencies Status](https://img.shields.io/david/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://david-dm.org/tiagoporto/gerador-validador-cpf)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://david-dm.org/tiagoporto/gerador-validador-cpf?type=dev)

> Biblioteca JS open-source para gerar e validar CPF.

A ferramenta pode ser acessada em [tiagoporto.github.io/gerador-validador-cpf](http://tiagoporto.github.io/gerador-validador-cpf).

_Leia em outros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/README-en.md), Português(Brasil)_

## Índice

- [Instalação](#instalação)
  - [Gerando CPF](#gerando-cpf)
  - [Validando CPF](#validando-cpf)
- [Contribuição](#contribuição)
- [Doações](#doações)
- [Licença](#licença)

## Instalação

```sh
npm install gerador-validador-cpf --save
```

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

**Obs.** os caracteres `.`, `-` e `espaço`, ignorados na validação.

## Contribuição

[Veja como contribuir](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/CONTRIBUTING.md).

## Doações

[![Donate](https://img.shields.io/badge/donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
![Donate](https://img.shields.io/badge/bitcoin-3DztnDvY7McQ7zwGS8Vjafsbc1ee1HDAmE-yellow.svg?logo=bitcoin)

## Licença

Gerador e validador de CPF está sob os termos da [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE).
