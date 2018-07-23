#!/bin/bash

branch=$(git rev-parse --abbrev-ref HEAD)
changed_files=$(git ls-files -m | wc -l)

if [ "$branch" != "master" ]; then
  echo "You must be on the master branch to release"
  exit 1
fi

if [ "$changed_files" -gt 0 ]; then
  echo "You have uncommitted changes. Please commit and run again."
  exit 1
fi

yarn run build
yarn run build-storybook

docs_changed=$(git ls-files docs/ -m | wc -l)

if [ $(git ls-files -m dist/index.js) ] || [ "$docs_changed" -gt 0 ]
then
  echo "Releasing..."
  git add dist/index.js
  git add docs/
  git commit -m "[Build] $(date)"
  yarn version
  git push origin master --tags
  echo "Released"
else
  echo "No updates detected"
  exit 1
fi
