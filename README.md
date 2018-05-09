# Gerador e Validador de CPF ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/gerador-validador-cpf/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/gerador-validador-cpf/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/gerador-validador-cpf.svg?style=flat-square&label=release)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
[![Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg?style=flat-square)](https://www.npmjs.com/package/gerador-validador-cpf)
[![License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/LICENSE)
[![Build Status](https://img.shields.io/travis/tiagoporto/gerador-validador-cpf/master.svg?style=flat-square&logo=travis&label=test)](https://travis-ci.org/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/gerador-validador-cpf.svg?style=flat-square)](https://david-dm.org/tiagoporto/gerador-validador-cpf?type=dev)

> Biblioteca JS open-source para gerar, validar e formatar CPF.

A ferramenta pode ser acessada em [tiagoporto.github.io/gerador-validador-cpf](http://tiagoporto.github.io/gerador-validador-cpf).


## Índice

* [Uso](#uso)
    * [Gerando CPF](#gerando-cpf)
    * [Validando CPF](#validando-cpf)
    * [Formatando CPF](#formatando-cpf)
* [Contribuição](#contribuição)
* [Doações](#doações)
* [Licença](#licença)


## Uso

Faça o download com [NPM](https://www.npmjs.com).

```
npm install gerador-validador-cpf --save
```

* Inclua o arquivo no rodapé da sua página, como no exemplo.

```html
<script src="node_modules/gerador-validador-cpf/dist/js/CPF.js"></script>
```


### Gerando CPF

Para __gerar CPF__ basta chamar a função `generate()`, veja um exemplo:

```javascript
CPF.generate()
```

Exemplo completo de uma possível utilização.

```javascript
document.getElementById('btn-gerar-CPF').onclick = function(){
    document.getElementById('CPF').innerHTML = CPF.generate()
}
```

Exemplo de validação utilizando um método com vuejs.
```javascript
import CPF from 'gerador-validador-cpf'

new Vue({
  el: '#app',

  methods: {
    validarCPF(value) {
      return CPF.validate(value)
    }
  }
})
```

A função recebe como parâmetro opcional a formatação do CPF, [opções](#opções-de-formatação).

### Validando CPF

Para __validar um CPF__ basta chamar a função `validate(cpf)`, passando como parâmetro o número a ser validado, não se preocupe com os caracteres `.`, `-` e `espaço`, a função fica encarregada de eliminar esses caracteres para verificação posterior, veja um exemplo:

```javascript
CPF.validate("123.456.789-00")
```

Exemplo completo de uma possível utilização com tratamento da mensagem de erro.

```javascript
document.getElementById('valida-CPF').onsubmit = function (event){
    document.getElementById('resultadoValidacao').innerHTML = CPF.validate(document.getElementById('cpf').value)

    return false
};
```

### Formatando CPF

Para __formatar um CPF__ basta chamar a função `format(cpf, param)`, passando como parâmetro o CPF a ser formatado, não se preocupe com os caracteres `.`, `-` e `espaço`, a função fica encarregada de eliminar esses caracteres para verificação posterior, veja um exemplo:

```javascript
CPF.format("123.456.789-00")
```

Exemplo completo de uma possível utilização.

```javascript
document.getElementById('CPF').onblur = function (){
    document.getElementById('CPF').value = CPF.format(document.getElementById('CPF').value)
}
```

#### Opções de formatação

##### Padrão
```javascript
CPF.format('12345678901')
```
Gera um CPF no formato xxx.xxx.xxx-xx

##### Dígitos
```javascript
CPF.format('123.456.789-01', 'digits')
```
Gera um CPF no formato xxxxxxxxxxx

##### Verificador
```javascript
CPF.format('12345678901', 'checker')
```
Gera um CPF no formato xxxxxxxxx-xx


## Contribuição
[Veja como contribuir](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/CONTRIBUTING.md).

## Doações

Este projeto é desenvolvido no meu tempo livre, e qualquer doação é bem vinda.

[![Donate](https://img.shields.io/badge/donate-PayPal-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
![Donate](https://img.shields.io/badge/bitcoin-14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp-yellow.svg?logo=bitcoin)

## Licença

Gerador e validador de CPF está sobre os termos da [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE).
