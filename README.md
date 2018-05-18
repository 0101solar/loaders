# loaders
Various Webpack loaders for libraries.

## Current loaders:
* [datta](https://github.com/kodedninja/datta)
* [smarkt](https://github.com/jondashkyle/smarkt)

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