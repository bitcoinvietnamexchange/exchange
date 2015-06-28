#!/bin/bash

if [ $# -ge 1 ]; then
	LANG=$1
else
	echo "Mini deployment script - build & deploy single theme for single language"
	echo
	echo "Syntax: ./minideploy.sh [language] [theme=default]"
	echo "e.g. ./minideploy.sh vi"
	exit 1
fi

THEME=default
if [ $# -ge 2 ]; then
	THEME=$2
fi

echo "Deploying $LANGUAGE using theme $THEME..."

git checkout gh-pages
git pull 
git checkout master
ln -s _config.bitcoinvietnam.testnet.yml  _config.yml

echo "Building javascript..."
cd jsdev
sh build_release.sh
echo "done"
cd ../

git commit -am "Release $LANGUAGE - mini"
./deploy.sh gh-pages ""
git push origin gh-pages
git checkout gh-pages
git branch -D master
git checkout master