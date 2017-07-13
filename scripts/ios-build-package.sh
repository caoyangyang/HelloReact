echo '==== generate the ipa file with fastlane gem===='
react-native bundle --dev false --platform ios --entry-file ./index.ios.js --bundle-output ./ios/main.jsbundle

echo '==== generate the ipa file with fastlane gem===='
cd ios
gem install match gym pilot fastlane
bundle install
match appstore

fastlane gym --export_method ad-hoc --scheme "HelloReact"
cd ..

