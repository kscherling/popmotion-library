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

if [[ $(git ls-files -m dist/index.js) ]]; then
  git add dist/index.js
  git commit -m "[Build] $(date)"
fi

git push origin master --tags
