echo '==== generate the ipa file with fastlane gem===='
cd ios
fastlane gym --export_method ad-hoc --scheme "HelloReact"
cd ..

