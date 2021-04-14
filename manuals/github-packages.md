# GitHub Packages

## GitHub Personal Access Token (PAT)

To use GitHub Packages, you will need a GitHub Personal Access Token (PAT) connected to the SubtleMedical SSO.  [Generate that token on GitHub](https://github.com/settings/tokens) and be sure to click "Enable SSO" to connect the PAT to the `@subtlemedicalinc` organization via OneLogin.

Store your PAT into the `$GITHUB_TOKEN` env var.

## ~/.npmrc

Create a file named `~/.npmrc` with the following content: 

```
//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN
@subtlemedicalinc:registry=https://npm.pkg.github.com/
```

Note that this assumes that the `$GITHUB_TOKEN` environment variable contains your SSO-enabled token, as described above.
