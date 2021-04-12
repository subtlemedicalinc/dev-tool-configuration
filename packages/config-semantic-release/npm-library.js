/** @format */

const base = require("./base");
const _ = require("lodash");

module.exports = _.mergeWith(
	{},
	base,
	{
		branches: [
			{ name: "+([0-9])?(.{+([0-9]),x}).x" },
			{ name: "develop", channel: "next", prerelease: "rc" },
			{ name: "alpha", prerelease: true },
			{ name: "beta", prerelease: true },
		],
		plugins: ["@semantic-release/npm"],
	},
	function customizer(leftVal, rightVal) {
		if (_.isArray(objValue)) {
			return _.concat(objValue, srcValue);
		}
	}
);
