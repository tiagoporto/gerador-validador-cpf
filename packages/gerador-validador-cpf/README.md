# gerador-validador-cpf

Biblioteca JS para gerar e validar CPF (Cadastro de Pessoas Físicas) do Brasil.

## Docs

Leia em outros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.en.md), [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.es.md) e Português(Brasil)

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

```js
import { generate as generateCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const cpf = generateCpf()
console.log(cpf) // 00000000000

const formattedCpf = generateCpf({ format: true })
console.log(formattedCpf) // 000.000.000-00
```

### Validando CPF

```js
import { validate as validadeCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const isCpfValid = validadeCpf('12345678900')
const isFormattedCpfValid = validadeCpf('123.456.789-00')
```

## Licença

Gerador Validador CPF © 2015 de Tiago Porto está licenciado sob a [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
