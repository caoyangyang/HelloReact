echo '==== build android ===='
sh scripts/android-build-package.sh

echo '==== build ios ===='
sh scripts/ios-build-package.sh

echo '==== call upload-package-to-firim script ===='
sh scripts/upload-to-fir-im.sh