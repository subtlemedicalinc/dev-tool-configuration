<!-- @format -->

# Commitizen for Node

The [Commitizen `npm` package](https://www.npmjs.com/package/commitizen) is an
easy way to generate commit messages in the
[Conventional Commits](https://conventionalcommits.org/) format. The
instructions that follow explain how to integrate it into your Node(-ish)
project.

To integrate this, start by running its `init` command:

_npm_

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

_yarn_

```
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Next, you'll first need to [install Husky](./husky.md).

Finish up by creating a file at `./.husky/prepare-commit-msg` with the following
content:

```
#!/bin/sh

. "$(dirname "$0")/_/husky.sh"


COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

# Run committizen when there is no commit source
# ($COMMIT_SOURCE is empty). Otherwise, keep the default message
# proposed by Git. Possible commit source: message, template,
# merge, squash or commit. See https://git-scm.com/docs/githooks
if [[ -z "$COMMIT_SOURCE" ]]
then
	exec < /dev/tty && node_modules/.bin/cz --hook || true
fi
```

Do a `git add` on all the created and modified files, and then test out the integration by running `git commit`.  You should get a prompt for the information needed to create a Conventional Commit message.
