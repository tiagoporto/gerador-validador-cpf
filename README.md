# Gerador e Validador de CPF

[![Build Status](https://travis-ci.org/tiagoporto/gerador-validador-cpf.svg)](https://travis-ci.org/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![devDependencies Status](https://david-dm.org/tiagoporto/gerador-validador-cpf/dev-status.svg)](https://david-dm.org/tiagoporto/gerador-validador-cpf?type=dev)
[![NPM Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg)](https://www.npmjs.com/package/gerador-validador-cpf)
[![Github Release](https://img.shields.io/github/release/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
[![Github Issues](https://img.shields.io/github/issues/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/issues)
[![Github License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE)

> Biblioteca JS open-source para gerar, validar e formatar CPF.

A ferramenta pode ser acessada pelo link: [tiagoporto.github.io/gerador-validador-cpf/](http://tiagoporto.github.io/gerador-validador-cpf/).

## Índice

* [Uso](#uso)
    * [Gerando CPF](#gerando-cpf)
    * [Validando CPF](#validando-cpf)
    * [Formatando CPF](#formatando-cpf)
* [Contribuição](#contribuição)

## Uso

Faça o download com [NPM](https://www.npmjs.com).

```sh
$ npm install gerador-validador-cpf --save
```

ou com [Bower](http://bower.io).

```sh
$ bower install gerador-validador-cpf --save
```

* Inclua o arquivo no rodapé da sua página, como no exemplo.

```html
<script src="node_modules/dist/js/CPF.js"></script>
```


### Gerando CPF

Para __gerar CPF__ basta chamar a função `generate()`, veja um exemplo:

```javascript
CPF.generate();
```

Exemplo completo de uma possível utilização.

```javascript
document.getElementById('btn-gerar-CPF').onclick = function(){
    document.getElementById('CPF').innerHTML = CPF.generate();
};
```

Exemplo de validação utilizando um método com vuejs.
```javascript
import cpf from 'gerador-validador-cpf';

new Vue({
    el: '#app',
    
    methods: {
        validar_seu_cpf(value) {
            return cpf.validate(value);
        }
});
```

A função recebe como parâmetro opcional a formatação do CPF, [opções](#opções-de-formatação).

### Validando CPF

Para __validar um CPF__ basta chamar a função `validate(cpf)`, passando como parâmetro o número a ser validado, não se preocupe com os caracteres `.`, `-` e `espaço`, a função fica encarregada de eliminar esses caracteres para verificação posterior, veja um exemplo:

```javascript
CPF.validate("123.456.789-00");
```

Exemplo completo de uma possível utilização com tratamento da mensagem de erro.

```javascript
document.getElementById('valida-CPF').onsubmit = function (event){
    document.getElementById('resultadoValidacao').innerHTML = CPF.validate(document.getElementById('cpf').value);

    return false;
};
```

### Formatando CPF

Para __formatar um CPF__ basta chamar a função `format(cpf, param)`, passando como parâmetro o CPF a ser formatado, não se preocupe com os caracteres `.`, `-` e `espaço`, a função fica encarregada de eliminar esses caracteres para verificação posterior, veja um exemplo:

```javascript
CPF.format("123.456.789-00");
```

Exemplo completo de uma possível utilização.

```javascript
document.getElementById('CPF').onblur = function (){
    document.getElementById('CPF').value = CPF.format(document.getElementById('CPF').value);
};
```

#### Opções de formatação

##### Padrão
```javascript
CPF.format('12345678901');
```
Gera um CPF no formato xxx.xxx.xxx-xx

##### Dígitos
```javascript
CPF.format('123.456.789-01', 'digits');
```
Gera um CPF no formato xxxxxxxxxxx

##### Verificador
```javascript
CPF.format('12345678901', 'checker');
```
Gera um CPF no formato xxxxxxxxx-xx


## Contribuição
[Veja como contribuir](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/CONTRIBUTING.md).
