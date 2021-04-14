<!-- @format -->

# dev-tool-configuration

Modules for configuring development tools (eg: ESLint, Semantic Release, etc.)

## GitHub Actions

See the `./github-actions` folder for workflows that you may want to use.

## Manual Development Tool Config

How-to guides on integrating development tools are under `./manuals`.

## Scripted Development Tool Config

You can install tools by running the scripts under `./script/install`.

## JavaScript/TypeScript Development Tools

The JavaScript/TypeScript development tools are in the root of this repository,
with particular packages under `./packages`.

### Using These Packages

To use any of these packages, you'll need to
[authenticate to GitHub Packages](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).  We have [a README for this](manuals/github-packages.md).

For integrating the shared config of specific tools, see its `README.md` file in
the respective folder under `./packages`.

### Development

If you want to develop on any of these files, first run `./script/bootstrap` to
initialize Lerna and the packages.

#### Publishing

Run `npx lerna publish` in the root directory, and this will publish any package
which has had changes. Note that the version of every package is the same, and
controlled by `lerna.json`.
