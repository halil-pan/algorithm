<h1 align='center'>
  <a href='https://github.com/halil-pan/ts-lib-template'>
    <samp>@halil-pan/ts-lib-template</samp>
  </a>
</h1>

<p align='center'>
  <a href='https://github.com/halil-pan/ts-lib-template/actions/workflows/release.yml'><image src='https://github.com/halil-pan/ts-lib-template/actions/workflows/release.yml/badge.svg?branch=main' alt='Release'/></a>
  <a href='https://npm.im/@halil-pan/ts-lib-template'><image src='https://badgen.net/npm/v/@halil-pan/ts-lib-template' alt='npm version'/></a>
  <a href="https://bundlephobia.com/result?p=@halil-pan/ts-lib-template"><img src="https://badgen.net/bundlephobia/minzip/@halil-pan/ts-lib-template" alt="Minified + gzip package size for @halil-pan/ts-lib-template in KB"></a>
  <a href='https://github.com/xojs/xo'><image src='https://img.shields.io/badge/code_style-XO-5ed9c7.svg' alt='XO code style'/></a>
  <a href='https://github.com/semantic-release/semantic-release'><image src='https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release' alt='semantic-release'/></a>
  <a href='https://open.vscode.dev/halil-pan/ts-lib-template'><image src='https://open.vscode.dev/badges/open-in-vscode.svg' alt='Open in Visual Studio Code'/></a>
</p>

## Features

- Use [pnpm](https://pnpm.js.org/) as the package manager
- Use [xv](https://github.com/typicode/xv) as the test runner
- Code style lint by [xo](https://github.com/xojs/xo)
- Run Typescript with [esno](https://github.com/antfu/esno), and bundle with [tsup](https://github.com/egoist/tsup)
- Npm publish by [semantic-release](https://npm.im/semantic-release) with [github-action](https://docs.github.com/en/actions)

## Checklist

- [ ] Search `ts-lib-template` and replace it with your package name.
- [ ] Search `halil-pan` and replace it with your name.
- [ ] Change the version to `0.0.0-semantic-release` in `package.json`.
- [ ] Generate [npm authentication token](https://docs.npmjs.com/creating-and-viewing-access-tokens) and copy it.
- [ ] Navigate to your GitHub repository page, click Settings and then Secrets. Click on New repository secret, fill in `NPM_TOKEN` as the Name, paste the npm token created on the previous step inside the Value field and hit Add secret.
- [ ] Clean up the `README.md`.

enjoy :)

## License

MIT &copy; [halil-pan](https://github.com/halil-pan)
