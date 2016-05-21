# Gerador e Validador de CPF

[![Build Status](https://travis-ci.org/tiagoporto/gerador-validador-cpf.svg)](https://travis-ci.org/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Github Release](https://img.shields.io/github/release/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
[![Github Issues](https://img.shields.io/github/issues/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/issues)
[![NPM Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg)](https://www.npmjs.com/package/gerador-validador-cpf)
[![Github License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/LICENSE.md)

> Biblioteca JS open-source para gerar, validar e formatar CPF.

A ferramenta pode ser acessada pelo link: [http://tiagoporto.github.io/gerador-validador-cpf/](http://tiagoporto.github.io/gerador-validador-cpf/).

## Uso

* Faça o download de uma das versões:

    * [Desenvolvimento](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/dist/js/CPF.js)

    * [Produção (Minificada)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/dist/js/CPF.min.js)

Se preferir baixe com [Bower](http://bower.io/).

```sh
$ bower install gerador-validador-cpf --save
```

Ou com [NPM](https://www.npmjs.com/).

```sh
$ npm install gerador-validador-cpf --save
```

* Inclua o arquivo no rodapé da sua página, como no exemplo.

```html
<script src="js/CPF.js"></script>
```


### Gerando CPF

Para __gerar CPF__ basta chamar a função `generate()`, veja um exemplo:

```javascript
CPF.generate();
```

Exemplo completo de uma possível utilização com javascript.

```javascript
document.getElementById('btn-gerar-CPF').onclick = function(){
    document.getElementById('CPF').innerHTML = CPF.generate();
};
```

A função recebe como parâmetro opcional a formatação do CPF, [opções](#opções-de-formatação).

### Validando CPF

Para __validar um CPF__ basta chamar a função `validate(cpf)`, passando como parâmetro o número a ser validado, não se preocupe com os caracteres `.`, `-` e `espaço`, a função fica encarregada de eliminar esses caracteres para verificação posterior, veja um exemplo:

```javascript
CPF.validate("123.456.789-00");
```

Exemplo completo de uma possível utilização com javascript com tratamento da mensagem de erro.

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

Exemplo completo de uma possível utilização com javascript.

```javascript
document.getElementById('CPF').onblur = function (){
    document.getElementById('CPF').value = CPF.formata(document.getElementById('CPF').value);
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

## Licença

Gerador e validador de CPF está sobre os termos da [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE.md).
