echo '==== update node depdency ===='
rm -rf node_modules && npm install

echo '==== build android ===='
sh scripts/android-build-package.sh

echo '==== build ios ===='
sh scripts/ios-build-package.sh