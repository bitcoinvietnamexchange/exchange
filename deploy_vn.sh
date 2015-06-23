#!/bin/bash

git checkout gh-pages
git pull 
git checkout master
ln -s _config.bitcoinvietnam.testnet.yml  _config.yml

echo "Building javascript"
cd jsdev
LANG=vi    THEME=default sh build_release.sh
echo "done"
cd ../

git commit -am "Release VN"
$ ./deploy.sh gh-pages ""
git push