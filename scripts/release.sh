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

dist_changed=$(git ls-files dist/ -m | wc -l)
docs_changed=$(git ls-files docs/ -m | wc -l)

if [ "$dist_changed" -gt 0 ] || [ "$docs_changed" -gt 0 ]
then
  echo "Commiting builds..."
  git add dist/
  git add docs/
  git commit -m "[Build] $(date)"
else
  echo "No build changes detected."
  exit 1
fi

echo "Releasing..."
yarn version
git push origin master --tags
echo "Released"
