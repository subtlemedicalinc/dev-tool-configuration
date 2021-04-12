module.exports = {
	preset: 'conventionalcommits',
	jiraHost: "subtlemedical.atlassian.net",
	branches: {
		{ name: "master" },
		{
			name: '[a-z][a-z][a-z]/*',
			prerelease: '${name.split("/")[0]}'
		},
	},
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/git',
		'@semantic-release/github',
		'semantic-release-jira-releases',
	],
}
