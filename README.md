## current loaders:
* [datta](https://github.com/kodedninja/datta)load
* [smarkt](https://github.com/jondashkyle/smarkt)load
* [indental](https://github.com/XXIIVV/Oscean/blob/master/scripts/lib/indental.js)load

## installation:
```
yarn add dattaload smarktload indentalload
```

## usage:
```javascript
{
	test: /\.smk$/,
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
},
{
	test: /\.tome$/,
	use: [
		'json-loader',
		'indentalload'
	]
}
```
