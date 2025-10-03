# gerador-validador-cpf

JS lib para generar y validar CPF (Cadastro de Pessoas Físicas) en Brasil.

## Docs

Leer en otros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.en.md), Español y [Português(Brasil)](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cpf/README.md)

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

```js
import { generate as generateCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const cpf = generateCpf()
console.log(cpf) // 00000000000

const formattedCpf = generateCpf({ format: true })
console.log(formattedCpf) // 000.000.000-00
```

### Validar CPF

```js
import { validate as validadeCpf } from 'gerador-validador-cpf'
// jsr import from "@tiagoporto/gerador-validador-cpf"

const isCpfValid = validadeCpf('12345678900')
const isFormattedCpfValid = validadeCpf('123.456.789-00')
```

## License

Gerador Validador CPF © 2015 de Tiago Porto tiene la [licencia MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
