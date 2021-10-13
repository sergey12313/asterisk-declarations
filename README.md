Typescript definitions for asterisk dialplan lua api. This is intended to be used with [TypescriptToLua](https://typescripttolua.github.io/).

Please add thea asterisk-declarations path to your `tsconfig.json` compiler options like below:

```js
{
    "compilerOptions": {
        // ...
        "typeRoots": [
            "./node_modules/@types",
            "./node_modules/asterisk-declarations/declarations"
        ]
    }
}
```
