## Current loaders:
* [datta](https://github.com/kodedninja/datta)load
* [smarkt](https://github.com/jondashkyle/smarkt)load

## Installation:
```
yarn add dattaload smarktload
```

## Usage:
```javascript
{
	test: /\.smk$/, // The extension doesn't matters
	loader: 'smarktload'
},
{
	test: /\.dtt$/,
	loader: 'dattaload'
}
```