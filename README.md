# dev-tool-configuration

Modules for configuring development tools (eg: ESLint, Semantic Release, etc.)

## Manual Development Tool Config

How-to guides on integrating development tools are under `./manuals`.

## JavaScript/TypeScript Development Tools

The JavaScript/TypeScript development tools are in the root of this repository, with particular packages under `./packages`.

### Using These Packages

To use these packages, you'll need to [authenticate to GitHub Packages](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages). The simplest way to do this is to create a file named `~/.npmrc` with the following contents:

```
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
@subtlemedicalinc:registry=https://npm.pkg.github.com
```

Replace `GITHUB_TOKEN` with your [GitHub personal access token](https://github.com/settings/tokens). Double-check that you've enabled SubtleMedical SSO for that access token.

For integrating the shared config of specific tools, see its `README.md` file in the respective folder under `./packages`.

### Development

If you want to develop on any of these files, first run `./script/bootstrap` to initialize Lerna and the packages.

#### Publishing

Run `npx lerna publish` in the root directory, and this will publish any package which has had changes. Note that the version of every package is the same, and controlled by `lerna.json`.
