# Express user-agent Middleware

Express middleware to parse user-agent header

## Install

```sh
npm i express-ua-middleware

#or

yarn add express-ua-middleware
```

## Use

This is a middleware to provide parsed user agent header, to use simply, import module, then use it on `express.use` method.

```js
const userAgent = require("express-ua-middleware");
const express = require("express");
const server = express();

server.use(userAgent);

server.get("/", (req, res) => {
	console.log(req.userAgent);
	/**
	 * Example
	 * {
	 *	 raw: "Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Mobile Safari/537.36",
	 *	 browser: {
	 *	 	name: "Chrome",
	 *	 	version: "77"
	 *	 },
	 *	 os: {
	 *	 	name: "Android",
	 *	 	version: "5.0"
	 *	 },
	 *	 device: {
	 *	 	vendor: "Samsung",
	 *	 	model: "SM-G900P"
	 *	 }
	 * }
	 */
})

```

Or you can use as parser, with method `userAgentFromString`

```js
server.get("/", (req, res) => {
	console.log(req.userAgentFromString(req.headers["user-agent"]));
	/**
	 * Example
	 * {
	 *	 browser: {
	 *	 	name: "Chrome",
	 *	 	version: "77"
	 *	 },
	 *	 os: {
	 *	 	name: "Android",
	 *	 	version: "5.0"
	 *	 },
	 *	 device: {
	 *	 	vendor: "Samsung",
	 *	 	model: "SM-G900P"
	 *	 }
	 * }
	 */
})

```
## Contributing

To contribute with the project, open a **issue** on Github or create a **Pull Request**
