<!-- @format -->

# Installing Husky

If you used Husky before, you may remember the PITA of setting it up. They
greatly simplified the whole process, and it works better now because it
leverages a new `git` feature, `core.hooksPath`.

## TL;DR

### npm

```
npx husky-init && npm install
```

### yarn

```
npx husky-init && yarn
```

## Adding Hooks

```
npx husky add ./.husky/$GITHOOK_NAME 'this is where your script goes'
```

`$GITHOOK_NAME` is the name of one of the
[git hooks](https://git-scm.com/docs/githooks).
