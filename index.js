const parser = require("ua-parser-js");

module.exports = (req, res, next) => {
	const ua = req.headers["user-agent"];
	const parsed = parser(ua);

	req.userAgent = {
		raw: ua.ua,
		browser: {
			name: ua.browser.name,
			version: ua.browser.major
		},
		os: ua.os,
		device: {
			vendor: ua.device.vendor,
			model: ua.device.model
		},
		cpu: ua.cpu.architecture
	}
	next();
}