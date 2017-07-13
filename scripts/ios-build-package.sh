react-native bundle --dev false --platform ios --entry-file ./index.ios.js --bundle-output ./ios/main.jsbundle

echo '==== change directory===='
cd ios

echo '==== generate the ipa file with fastlane gem===='
gem install match gym pilot fastlane
bundle install
match appstore
fastlane gym --export_method ad-hoc --scheme "HelloReact"

echo '==== back to directory===='
cd ..

