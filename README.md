# eslint-plugin-no-bluebird

Detect the use of bluebird and dependencies on its promise extensions

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-bluebird`:

```sh
npm install eslint-plugin-no-bluebird --save-dev
```

## Usage

Add `no-bluebird` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-bluebird"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-bluebird/rule-name": 2
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->

| Name                                                 | Description                             |
| :--------------------------------------------------- | :-------------------------------------- |
| [no-filtered-catch](docs/rules/no-filtered-catch.md) | Prevent filtered `catch` function calls |

<!-- end auto-generated rules list -->


