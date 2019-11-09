# Gerador e Validador de CPF ![Open Source Love](https://github.com/ellerbrock/open-source-badges/blob/master/badges/open-source-v3/open-source.svg)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/gerador-validador-cpf/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/gerador-validador-cpf.svg?style=flat-square&label=release)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
[![Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg?style=flat-square)](https://www.npmjs.com/package/gerador-validador-cpf)
[![install size](https://packagephobia.now.sh/badge?p=gerador-validador-cpf)](https://packagephobia.now.sh/result?p=gerador-validador-cpf)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-yellow.svg?style=flat-square)](http://standardjs.com)
![npm type definitions](https://img.shields.io/npm/types/gerador-validador-cpf.svg?style=flat-square)
[![License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/LICENSE)

[![Build Status](https://img.shields.io/travis/com/tiagoporto/gerador-validador-cpf/master.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/master)](https://stryker-mutator.github.io)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://david-dm.org/tiagoporto/gerador-validador-cpf?type=dev)

> Biblioteca JS open-source para gerar, validar e formatar CPF.

A ferramenta pode ser acessada em [tiagoporto.github.io/gerador-validador-cpf](http://tiagoporto.github.io/gerador-validador-cpf).

_Leia em outros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf), Português(Brasil)_

## Índice

- [Instalação](#instalacao)
  - [Gerando CPF](#gerando-cpf)
  - [Validando CPF](#validando-cpf)
  - [Formatando CPF](#formatando-cpf)
- [Contribuição](#contribuição)
- [Doações](#doações)
- [Licença](#licença)

## Instalação

```sh
npm install gerador-validador-cpf --save
```

### Gerando CPF

```javascript
import { generate as generateCPF } from 'gerador-validador-cpf'

generateCPF([formatOption])
```

Veja as [opções de formatação](#opções-de-formatação)

### Validando CPF

```javascript
import { validate as validateCPF } from 'gerador-validador-cpf'

validateCPF('123.456.789-00')
```

**Obs.** os caracteres `.`, `-` e `espaço`, são tratados na validação.

### Formatando CPF

```javascript
import { format as formatCPF } from 'gerador-validador-cpf'

formatCPF('123.456.789-00', [formatOption])
```

Veja as [opções de formatação](#opções-de-formatação)

**Obs.** os caracteres `.`, `-` e `espaço`, são tratados na validação.

#### Opções de formatação

##### Padrão

```javascript
import { format as formatCPF } from 'gerador-validador-cpf'

formatCPF('12345678901')
```

Gera um CPF no formato xxx.xxx.xxx-xx

##### Dígitos

```javascript
import { format as formatCPF } from 'gerador-validador-cpf'

formatCPF('123.456.789-01', 'digits')
```

Gera um CPF no formato xxxxxxxxxxx

##### Verificador

```javascript
import { format as formatCPF } from 'gerador-validador-cpf'

formatCPF('12345678901', 'checker')
```

Gera um CPF no formato xxxxxxxxx-xx

## Contribuição

[Veja como contribuir](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/CONTRIBUTING.md).

## Doações

Este projeto é desenvolvido no meu tempo livre, e qualquer doação é bem vinda.

[![Donate](https://img.shields.io/badge/donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
![Donate](https://img.shields.io/badge/bitcoin-3DztnDvY7McQ7zwGS8Vjafsbc1ee1HDAmE-yellow.svg?logo=bitcoin)

## Licença

Gerador e validador de CPF está sobre os termos da [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE).
