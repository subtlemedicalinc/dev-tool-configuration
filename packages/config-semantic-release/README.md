<!-- @format -->

# `@subtlemedicalinc/config-semantic-release`

This package contains our shared configurations for
[Semantic Release](https://semantic-release.gitbook.io). It's (most of) the
payoff for using [Conventional Commits](https://conventionalcommits.org/), in
that it does all the bookkeeping that one might want around a release.

## Installation

First, install the package.

```
npm install --save-dev @subtlemedicalinc/config-semantic-release
yarn add --dev @subtlemedicalinc/config-semantic-release
```

Next, add a `"release"` key as a toplevel field to `package.json`.

```
"release": {
	"extends": "@subtlemedicalinc/config-semantic-release",
	"projectId": "PLAT",
	"releaseTempalteName": "edge-v${version}",
	"ticketPrefixes": [ "PLAT", "FR" ]
}
```

- `projectId` -- The Jira project id that will contain the releases.
- `releaseTemplateName` -- The pattern of release names in Jira, expressed as a
  Lodash template.
- `ticketPrefixes` -- The Jira ticket id prefixes searched to include in each
  release.

## Usage

If you're curious to see what Semantic Release would do for you, run the
following in the root of your project once it's installed:

```
npx semantic-release --dry-run
```

Hooking up Semantic Release involves integrating it into the project's CI/CD.

## Configurations

Below are the different shared configurations that you can choose from in this
project.

### `base`

The base configuration is the common configuration that should work for any
project. This is what you get by default if your release config does an `extend`
on this package.

The functionality provided is:

- Parse the commits using
  [Conventional Commits](https://conventionalcommits.org/).
- Bump the version as implied by the commits. For details on this, see the
  [default release rules](https://github.com/semantic-release/commit-analyzer/blob/HEAD/lib/default-release-rules.js).
- Generate release notes for this release based on the commits.
- Create a release tag in git and push it to the GitHub repo.
- Create a release in GitHub and publish the assets there.
- Add a comment about the release on any GitHub issues or PRs that are a part of
  this release.
- Create a release in Jira, and then find the Jira tickets referenced in the
  commits and put them into the release.
- Publish the `master` branch as the release branch.
- Publish any branch matching the pattern `^[a-z]{3}/` as a pre-release.

### `npm-library`

This is the specialized configuration for `npm`-ish libraries. It extends the
`base` config and provides all the functionality documented above. It also does
the following:

- If there is a branch named `N.N.x` or `N.x.x` (where `N` is one or more digits
  and `x` is the literal letter 'x'), then releases within that range will be
  automatically merged into those branches.
- The `develop` branch is automatically released under the `next` channel as an
  `rc`-tagged prerelease.
- The `alpha` and `beta` branches (if either/both exist) are also released as
  prereleases onto the `alpha` and `beta` channel (respectively).
- Publish the release to the `npm` repository (in our case, GitHub Packages)

## TODOs

- Add in
  [`semantic-release-slack-bot`](https://github.com/juliuscc/semantic-release-slack-bot/)
