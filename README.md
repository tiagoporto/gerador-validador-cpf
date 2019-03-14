# Gerador e Validador de CPF ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/gerador-validador-cpf/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/gerador-validador-cpf.svg?style=flat-square&label=release)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
[![Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg?style=flat-square)](https://www.npmjs.com/package/gerador-validador-cpf)
[![install size](https://packagephobia.now.sh/badge?p=gerador-validador-cpf)](https://packagephobia.now.sh/result?p=gerador-validador-cpf)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-yellow.svg?style=flat-square)](http://standardjs.com)
[![typescript-code](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/LICENSE)

[![Build Status](https://img.shields.io/travis/com/tiagoporto/gerador-validador-cpf/master.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/master)](https://stryker-mutator.github.io)
[![Inline docs](http://inch-ci.org/github/tiagoporto/gerador-validador-cpf.svg?branch=master&style=flat-square)](http://inch-ci.org/github/tiagoporto/gerador-validador-cpf)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://david-dm.org/tiagoporto/gerador-validador-cpf?type=dev)

> JS open-source lib to generate, validate and formate CPF.

The tool can be accessed on [tiagoporto.github.io/gerador-validador-cpf](http://tiagoporto.github.io/gerador-validador-cpf).

*Read this in other languages: English, [Português(Brasil)](README.md)*


## Topics

- [Installation](#installation)
  - [Generate CPF](#generate-cpf)
  - [Validate CPF](#validate-cpf)
  - [Formate CPF](#formate-cpf)
- [Contribute](#contribute)
- [Donation](#donation)
- [License](#license)

## Installation

```sh
npm install gerador-validador-cpf@beta --save
```

### Generate CPF

```javascript
import { generate as generateCPF } from "gerador-validador-cpf";

generateCPF([formatOption]);
```

Veja as [opções de formatação](#opções-de-formatação)

### Validate CPF

```javascript
import { validate as validateCPF } from "gerador-validador-cpf";

validateCPF("123.456.789-00");
```

**Obs.** não se preocupe com os caracteres `.`, `-` e `espaço`, eles são tratados para validação.

### Formate CPF

```javascript
import { format as formatCPF } from "gerador-validador-cpf";

formatCPF("123.456.789-00", [formatOption]);
```

Veja as [opções de formatação](#opções-de-formatação)

**Obs.** não se preocupe com os caracteres `.`, `-` e `espaço`, eles são tratados para validação.

#### Format options

##### Default

```javascript
import { format as formatCPF } from "gerador-validador-cpf";

formatCPF("12345678901");
```

Generates a CPF in the format xxx.xxx.xxx-xx

##### Digits

```javascript
import { format as formatCPF } from "gerador-validador-cpf";

formatCPF("123.456.789-01", "digits");
```

Generates a CPF in the format xxxxxxxxxxx

##### Checker

```javascript
import { format as formatCPF } from "gerador-validador-cpf";

formatCPF("12345678901", "checker");
```

Generates CPF in the format xxxxxxxxx-xx

## Contribute

[Veja como contribuir](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/CONTRIBUTING.md).

## Donation

Este projeto é desenvolvido no meu tempo livre, e qualquer doação é bem vinda.

[![Donate](https://img.shields.io/badge/donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
![Donate](https://img.shields.io/badge/bitcoin-3QYymprPXg8Ki5go7Thm8oQjZHD5rFuPP4-yellow.svg?logo=bitcoin)

## License

Gerador e validador de CPF is released under the terms of the [MIT license](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE).
