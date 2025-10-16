# Gerador e Validador de CPF e CNPJ ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg)

JS lib to generate and validate CPF (Cadastro de Pessoas Físicas) and
Alphanumeric CNPJ (Cadastro Nacional de Pessoas Jurídicas) of Brazil.

## 🎮 Playground

<https://tiagoporto.github.io/gerador-validador-cpf/>

## ✅ Status

[![Docs GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/check-docs.yml?branch=main&label=docs&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/check-docs.yml?query=branch%3Amain)
[![Checks GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/checks.yml?branch=main&label=checks&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/checks.yml?query=branch%3Amain)
[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?branch=main&label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml?query=branch%3Amain)
[![E2E Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/e2e-tests.yml?branch=main&label=e2e%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/e2e-tests.yml?query=branch%3Amain)

![Website](https://img.shields.io/website?logo=githubpages&style=flat-square&url=https://tiagoporto.com/gerador-validador-cpf)
![W3C Validation](https://img.shields.io/w3c-validation/html.svg?style=flat-square&targetUrl=https://tiagoporto.com/gerador-validador-cpf/)
[![WCAG](https://img.shields.io/badge/wcag-F1FBF5?style=flat-square)](https://www.accessibilitychecker.org/audit/?website=https://tiagoporto.com/gerador-validador-cpf)
[![Pagespeed](https://img.shields.io/badge/pagespeed-066AFE?style=flat-square)](https://pagespeed.web.dev/analysis/https-tiagoporto-com-gerador-validador-cpf/zhogllvqdq?form_factor=mobile)

[![Coverage](https://img.shields.io/codecov/c/github/tiagoporto/gerador-validador-cpf/main?style=flat-square)](https://app.codecov.io/gh/tiagoporto/gerador-validador-cpf/tree/main)
[![Mutation Score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

## 🧰 Stack

![node](https://img.shields.io/badge/Nodejs-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![nvm](https://img.shields.io/badge/nvm-%23333?style=for-the-badge&logo=nvm)
![pnpm](https://img.shields.io/badge/pnpm-%231A191B?style=for-the-badge&logo=pnpm)
![vs code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIzLjE1IDIuNTg3IDE4LjIxLjIxYTEuNDk0IDEuNDk0IDAgMCAwLTEuNzA1LjI5bC05LjQ2IDguNjMtNC4xMi0zLjEyOGEuOTk5Ljk5OSAwIDAgMC0xLjI3Ni4wNTdMLjMyNyA3LjI2MUExIDEgMCAwIDAgLjMyNiA4Ljc0TDMuODk5IDEyIC4zMjYgMTUuMjZhMSAxIDAgMCAwIC4wMDEgMS40NzlMMS42NSAxNy45NGEuOTk5Ljk5OSAwIDAgMCAxLjI3Ni4wNTdsNC4xMi0zLjEyOCA5LjQ2IDguNjNhMS40OTIgMS40OTIgMCAwIDAgMS43MDQuMjlsNC45NDItMi4zNzdBMS41IDEuNSAwIDAgMCAyNCAyMC4wNlYzLjkzOWExLjUgMS41IDAgMCAwLS44NS0xLjM1MnptLTUuMTQ2IDE0Ljg2MUwxMC44MjYgMTJsNy4xNzgtNS40NDh2MTAuODk2eiIvPjwvc3ZnPg==)
![windsurf](https://img.shields.io/badge/windsurf%20ai%20plugin-000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI5NyIgdmlld0JveD0iMCAwIDUxMiAyOTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01MDcuMjggMC4xNDI2MjNINTAyLjRDNDc2LjcyMSAwLjEwMjYzIDQ1NS44ODIgMjAuODk5IDQ1NS44ODIgNDYuNTc0NVYxNTAuNDE2QzQ1NS44ODIgMTcxLjE1MyA0MzguNzQzIDE4Ny45NSA0MTguMzQ0IDE4Ny45NUM0MDYuMjI0IDE4Ny45NSAzOTQuMTI1IDE4MS44NTEgMzg2Ljk0NSAxNzEuNjEzTDI4MC44ODkgMjAuMTM5MUMyNzIuMDg5IDcuNTYxMzMgMjU3Ljc3IDAuMDYyNjM3MyAyNDIuMjcxIDAuMDYyNjM3M0MyMTguMDkxIDAuMDYyNjM3MyAxOTYuMzMyIDIwLjYxOTEgMTk2LjMzMiA0NS45OTQ2VjE1MC40MzZDMTk2LjMzMiAxNzEuMTczIDE3OS4zMzMgMTg3Ljk3IDE1OC43OTQgMTg3Ljk3QzE0Ni42MzQgMTg3Ljk3IDEzNC41NTUgMTgxLjg3MSAxMjcuMzc1IDE3MS42MzNMOC42OTk2NiAyLjEyMjI4QzYuMDE5NzYgLTEuNzE3MDUgMCAwLjE4MjYxNyAwIDQuODYxOFY5NS40MjZDMCAxMDAuMDA1IDEuMzk5OTUgMTA0LjQ0NCA0LjAxOTg0IDEwOC4yMDRMMTIwLjgxNSAyNzQuOTk1QzEyNy43MTUgMjg0Ljg1MyAxMzcuODk1IDI5Mi4xNzIgMTQ5LjYzNCAyOTQuODMxQzE3OS4wMTMgMzAxLjUxIDIwNi4wNTIgMjc4Ljg5NCAyMDYuMDUyIDI1MC4wNzlWMTQ1LjY5N0MyMDYuMDUyIDEyNC45NjEgMjIyLjg1MSAxMDguMTY0IDI0My41OSAxMDguMTY0SDI0My42NUMyNTYuMTUgMTA4LjE2NCAyNjcuODcgMTE0LjI2MyAyNzUuMDQ5IDEyNC41MDFMMzgxLjEyNSAyNzUuOTU1QzM4OS45NDUgMjg4LjU1MiA0MDMuNTI0IDI5Ni4wMzEgNDE5LjcyNCAyOTYuMDMxQzQ0NC40NDMgMjk2LjAzMSA0NjUuNjIyIDI3NS40NTUgNDY1LjYyMiAyNTAuMDk5VjE0NS42NzdDNDY1LjYyMiAxMjQuOTQxIDQ4Mi40MjEgMTA4LjE0NCA1MDMuMTYgMTA4LjE0NEg1MDcuM0M1MDkuOSAxMDguMTQ0IDUxMiAxMDYuMDQ0IDUxMiAxMDMuNDQ1VjQuODQxOEM1MTIgMi4yNDIyNiA1MDkuOSAwLjE0MjYyMyA1MDcuMyAwLjE0MjYyM0g1MDcuMjhaIiBmaWxsPSIjMDBhNTkxIi8+Cjwvc3ZnPgo=)

![git](https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23FE5196?style=for-the-badge&logo=conventional%20commits&logoColor=white)
![Semantic Release](https://img.shields.io/badge/Semantic%20Release-%23494949?style=for-the-badge&logo=semantic-release)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2323272ff2?style=for-the-badge&logo=react)
![i18next](https://img.shields.io/badge/i18next-%2326A69A?style=for-the-badge&logo=i18next&logoColor=white)
![Sass](https://img.shields.io/badge/sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=white)
![ejs](https://img.shields.io/badge/ejs-%23B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![PostCSS](https://img.shields.io/badge/postcss-%23DD3A0A?style=for-the-badge&logo=postcss)
![Autoprefixer](https://img.shields.io/badge/autoprefixer-%23DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white)
![CSS Modules](https://img.shields.io/badge/css%20modules-%23333?style=for-the-badge&logo=css-modules)
![PWA](https://img.shields.io/badge/pwa-%235A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Browserslist](https://img.shields.io/badge/Browserslist-%23FED538.svg?style=for-the-badge&color=%23FFD539&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC4xIDMyIj48cGF0aCBkPSJNMjIuNCAxMS41Yy0uMS0uMy0uNC0uNi0uNy0uOC4yLjQgMCAuOC0uMyAxLS4zLjEtLjcgMC0uOS0uNS0uMS0uMyAwLS41IDAtLjdoLS4zYy0uOC4zLTEuMiAxLjMtLjkgMi4xLjMuOCAxLjMgMS4yIDIuMS44czEuMi0xLjMuOS0yLjFaIi8+PHBhdGggZD0iTTE5LjQgMTkuMmMzLjEtLjUgNi4xLTEuNiA4LjgtMy4xaC4xYzEuMS0uOSAyLjItMi41LjctMy4zLS43LS40LTEuNCAwLTEuOS40LTIuNS0xLTQuMy0zLjEtNC44LTUuNiAyLjEtLjkgNC41LTEgNi42LS4zLTIuOS0zLjEtNi4zLTMuOC04LjQtMy44LjItLjcuOC0xIDEuNy0xLjktMi43LS42LTYuMSAxLjEtNy4yIDIuMi0uNC0uNS0xLTIuMy0xLTMuMy0xLjQuNC0yLjkgMy4yLTMuMSA0LjQtLjctLjQtMS43LTEuOC0yLjEtMi43LTEgLjgtMS43IDMuNy0xLjYgNS4zLTEuMS0uNC0yLjEtMS4xLTIuOS0yLS43IDIuMi0uMiAzLjcuNSA1LjMtLjguMi0yLjYtLjItMy40LS42LS4zIDIuMiAxLjMgNCAyLjMgNC42LS44LjQtMi4zLjUtMy41LjYuNSAxLjggMi41IDIuOSAzLjggMy42LTEgMS0yIDEuNi0yLjkgMi4xIDEuMyAxLjIgMyAxLjkgNC44IDIuMS0uNC43LTEuMiAyLjMtMS44IDMuMSAxLjIuMyA0LjMgMCA0LjgtLjItLjMgMS41LS41IDIuOSAwIDQgMS0uNSAzLjItMS44IDMuOS0yLjMgMCAxLjYuOCAzLjEgMi4yIDMuOS4yLTEuMSAxLjMtMyAxLjktMy40LjQuNyAyLjIgMi43IDMuNSAyLjcgMC0xLjIuMi0zIC42LTMuNiAxLjEuNyAzLjIgMS42IDQuOS45LS44LS43LTEuNy0yLjQtMS42LTMuMiAyLjYtLjUgNC4yLTIgNC42LTMuOC0yLjcgMS4zLTcuMS44LTkuNS0yLjFabTcuMy01LjNzLjIgMCAuMy4xYy41LjMuNi44LjQgMS4zIDAgLjItLjIuNC0uNS41LTIuNiAxLjUtNS40IDIuMi04LjEgMi42LS43LTEuMS0xLjEtMi42LTEuMS00LjQgMC0yLjggMS42LTQuOSAzLjctNi4xLjcgMi43IDIuNiA0LjkgNS4yIDZaIi8+PC9zdmc+)

![Webpack](https://img.shields.io/badge/Webpack-%232b3a42?style=for-the-badge&logo=webpack)
![SWC](https://img.shields.io/badge/swc-%23F8C457?style=for-the-badge&logo=swc&logoColor=black)
![Rollup](https://img.shields.io/badge/rollup-%231B1B1F?style=for-the-badge&logo=rollup.js)
![Jest](https://img.shields.io/badge/jest-%23C21325?style=for-the-badge&logo=jest)
![Cypress](https://img.shields.io/badge/cypress-%2369D3A7?style=for-the-badge&logo=cypress&logoColor=white)
![Chromatic](https://img.shields.io/badge/chromatic-%23FFF?style=for-the-badge&logo=chromatic)
![Stryker](https://img.shields.io/badge/stryker-%23E74C3C?style=for-the-badge&logo=stryker&logoColor=white)

![EditorConfig](https://img.shields.io/badge/EditorConfig-%23E0EFEF.svg?style=for-the-badge&logo=editorconfig&logoColor=black)
![Prettier](https://img.shields.io/badge/Prettier-1A2B34.svg?style=for-the-badge&logo=prettier)
![Eslint](https://img.shields.io/badge/ESLint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-%231B3A4B.svg?style=for-the-badge&logo=stylelint&logoColor=white)
![Remark](https://img.shields.io/badge/Remark-%230A0E0F.svg?style=for-the-badge&logo=remark&logoColor=d80303)
![Husky](https://img.shields.io/badge/%F0%9F%90%B6%20Husky-%23161618.svg?style=for-the-badge)
![Lint Staged](https://img.shields.io/badge/%F0%9F%9A%AB%20Lint%20Staged-%23fef9f9.svg?style=for-the-badge)
![Commitlint](https://img.shields.io/badge/Commitlint-%23000.svg?style=for-the-badge&logo=commitlint&logoColor=white)

![codecov](https://img.shields.io/badge/codecov-%231C1E24?style=for-the-badge&logo=codecov)
![Dependabot](https://img.shields.io/badge/dependabot-%23025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Github%20Pages-%23222222?style=for-the-badge&logo=githubpages&logoColor=white)

## 📦 Packages

### gerador-validador-cpf

[![version](https://img.shields.io/npm/v/gerador-validador-cpf?style=flat-square&label=)](https://www.npmjs.com/package/gerador-validador-cpf)
![npm type definitions](https://img.shields.io/npm/types/gerador-validador-cpf.svg?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/min/gerador-validador-cpf?style=flat-square)](https://bundlephobia.com/package/gerador-validador-cpf)
[![Downloads](https://img.shields.io/npm/dm/gerador-validador-cpf.svg?style=flat-square)](https://www.npmjs.com/package/gerador-validador-cpf)

[![NPM](https://img.shields.io/badge/npm-555?style=flat-square&logo=npm&labelColor=red)](https://www.npmjs.com/package/gerador-validador-cpf)
[![jsr](https://img.shields.io/badge/jsr-555?style=flat-square&logo=jsr&labelColor=F7DF1E&logoColor=093344)](https://jsr.io/@tiagoporto/gerador-validador-cpf)

#### Docs

[English](packages/gerador-validador-cpf/README.en.md), [Español](packages/gerador-validador-cpf/README.es.md) e [Português(Brasil)](packages/gerador-validador-cpf/README.md)

### gerador-validador-cnpj

[![version](https://img.shields.io/npm/v/gerador-validador-cnpj?style=flat-square&label=)](https://www.npmjs.com/package/gerador-validador-cnpj)
![npm type definitions](https://img.shields.io/npm/types/gerador-validador-cnpj.svg?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/min/gerador-validador-cnpj?style=flat-square)](https://bundlephobia.com/package/gerador-validador-cnpj)
[![Downloads](https://img.shields.io/npm/dm/gerador-validador-cnpj.svg?style=flat-square)](https://www.npmjs.com/package/gerador-validador-cnpj)

[![NPM](https://img.shields.io/badge/npm-555?style=flat-square&logo=npm&labelColor=red)](https://www.npmjs.com/package/gerador-validador-cnpj)
[![jsr](https://img.shields.io/badge/jsr-555?style=flat-square&logo=jsr&labelColor=F7DF1E&logoColor=093344)](https://jsr.io/@tiagoporto/gerador-validador-cnpj)

<h4>Docs</h4>

[English](packages/gerador-validador-cnpj/README.en.md), [Español](packages/gerador-validador-cnpj/README.es.md) e [Português(Brasil)](packages/gerador-validador-cnpj/README.md)

## 🛠 Development

### Pre-requirements

- [git](https://git-scm.com)
- [nvm](https://github.com/nvm-sh/nvm)

### Install node

```bash
nvm install
```

### Install pnpm

```bash
corepack enable pnpm
```

### Install

```bash
pnpm install
```

### Running dev server

```bash
pnpm start
```

## 🤝 Contributing

[Check how to contribute](https://github.com/tiagoporto/.github/blob/main/CONTRIBUTING.md).

## 🤜🤛 Donating

This project is developed on my free time, any donation is welcome.

[![GITHUB Sponsor](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/sponsors/tiagoporto)
[![Paypal Donate](https://img.shields.io/badge/PayPal-blue?logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF:btn_donateCC_LG%2egif:NonHosted)
![Bitcoin](https://img.shields.io/badge/bitcoin-14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp-yellow.svg?logo=bitcoin)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
