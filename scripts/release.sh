#!/bin/bash

set -e

# 判断是否输入版本
if [[ -z $1 ]]; then
  echo "Enter new version: "
  read -r VERSION
else
  VERSION=$1
fi

# 发布分支
release="master"

git pull origin $release
echo "Current pull origin $release."

# 更新版本并且打 tag
npm version $VERSION

# push
git push --follow-tags origin $release
echo "Release finished."