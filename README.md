## current loaders:
* [datta](https://github.com/kodedninja/datta)load
* [smarkt](https://github.com/jondashkyle/smarkt)load

## installation:
```
yarn add dattaload smarktload
```

## usage:
```javascript
{
	test: /\.smk$/, // The extension doesn't matters
	use: [
		'json-loader',
		'smarktload'
	]
},
{
	test: /\.dtt$/,
	use: [
		'json-loader',
		'dattaload'
	]
}
```
