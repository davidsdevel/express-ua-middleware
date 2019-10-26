const parser = require("ua-parser-js");

module.exports = (req, res, next) => {
	const ua = req.headers["user-agent"];
	const parsed = parser(ua);

	req.userAgentFromString = raw => {
		const parsedRaw = parser(raw);

		return {
			browser: {
				name: parsedRaw.browser.name,
				version: parsedRaw.browser.major
			},
			os: parsedRaw.os,
			device: {
				vendor: parsedRaw.device.vendor,
				model: parsedRaw.device.model
			}
		}
	}

	req.userAgent = {
		raw: parsed.ua,
		browser: {
			name: parsed.browser.name,
			version: parsed.browser.major
		},
		os: parsed.os,
		device: {
			vendor: parsed.device.vendor,
			model: parsed.device.model
		}
	}

	next();
};
