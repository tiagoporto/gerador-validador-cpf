# Gerador e Validador de CPFs

[![Build Status](https://travis-ci.org/tiagoporto/gerador-validador-cpf.svg)](https://travis-ci.org/tiagoporto/gerador-validador-cpf)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/gerador-validador-cpf.svg)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Github Release](https://img.shields.io/github/release/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/releases)
[![Github Issues](https://img.shields.io/github/issues/tiagoporto/gerador-validador-cpf.svg)](https://github.com/tiagoporto/gerador-validador-cpf/issues)
[![NPM Downloads](https://img.shields.io/npm/dt/gerador-validador-cpf.svg)](https://www.npmjs.com/package/gerador-validador-cpf)
[![Github License](https://img.shields.io/github/license/tiagoporto/gerador-validador-cpf.svg)](https://raw.githubusercontent.com/tiagoporto/gerador-validador-cpf/master/LICENSE.md)


A ferramenta pode ser acessada pelo link: [http://tiagoporto.github.io/gerador-validador-cpf/](http://tiagoporto.github.io/gerador-validador-cpf/).

## Funcionalidades

* Gerar CPFs válidos
* Validar CPFs
* Formatar CPF

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

Exemplo completo de uma possível utilização com javascript puro.

```javascript
document.getElementById('btn-gerar-CPF').onclick = function(){
    document.getElementById('CPF').innerHTML = CPF.generate();
};
```


### Validando CPF

Para __validar um CPF__ basta chamar a função `validate(cpf)`, passando como string o número a ser validado, não importa se tiver pontuação, a função fica encarregada de eliminar caracteres não numéricos para verificação posterior, veja um exemplo:

```javascript
CPF.validate("123.456.789-00");
```

Exemplo completo de uma possível utilização com javascript puro.

```javascript
document.getElementById('valida-CPF').onsubmit = function (event){
    document.getElementById('resultadoValidacao').innerHTML = CPF.validate(document.getElementById('cpf').value);

    return false;
};
```

## Licença

Gerador e validador de CPFs está sobre os termos da [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/master/LICENSE.md).
