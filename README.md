# ROLO WEB APP

## What is ROLO WEB APP?

- ROLO WEB APP is the web panel used for the ROLO MOBILE APP for creating/designing ROLES as well as purchasing subscriptions.

## Tech stack used

- ROLO WEB APP uses NextJS, ReactJS's framework
- ROLO WEB APP uses Mantine components library for designing everything.

## Custom styling (Mandatory follow this step for any CSS applied by developers to design the UI in this app.)

- Using Mantine's custom styling guide https://mantine.dev/styles/create-styles/
- Using Style API https://mantine.dev/styles/styles-api/

## Checking the app (Mandatory to use these commands before commiting anything.) 

```bash
# Check Format
$ yarn check-format

# Check Types
$ yarn check-types

# Check ESLint
$ yarn check-lint

# Check All
$ yarn test-all
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn e2e

```

## Running the app

```bash
# development
$ yarn dev

# watch mode
$ yarn start

```

## Makefile git add commit push github

### Semantic Commit Messages (Mandatory for this app)

See how a minor change to your commit message style can make you a better programmer.

```bash
Format: <type>(<scope>): <subject>

<scope> is optional
```

**Examples:**

```bash
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, test, build, ci, perf or revert 
```

**More Examples:**

- **chore:** (updating grunt tasks etc; no production code change)
- **docs:** (changes to the documentation)
- **feat:** (new feature for the user, not a new feature for build script)
- **fix:** (bug fix for the user, not a fix to a build script)
- **refactor:** (refactoring production code, eg. renaming a variable)
- **style:** (formatting, missing semi colons, etc; no production code change)
- **test:** (adding missing tests, refactoring tests; no production code change)
- **build:** (changes that affect the build system or external dependencies)
- **ci:** (continuous integration related)
- **perf:** (performance improvements)
- **revert:** (reverts a previous commit)

```bash
# Git ADD file
$ git add file1 file2

# Git Commit file
$ git commit -m "fix: Add existing file"

# Git Push file
$ git push origin branch-name

```