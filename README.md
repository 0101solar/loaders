## Current loaders:
* [datta](https://github.com/kodedninja/datta)loader
* [smarkt](https://github.com/jondashkyle/smarkt)loader

## Installation:
```
yarn add dattaloader smarktloader
```

## Usage:
```javascript
{
	test: /\.smk$/, // The extension doesn't matters
	loader: 'smarktloader'
},
{
	test: /\.dtt$/,
	loader: 'dattaloader'
}
```