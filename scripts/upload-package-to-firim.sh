echo 'install fir-cli if not exist'
gem install fir-cli
echo 'login to fir.im in cli'
fir login 66af5c09c6a70dc42e36c6c5aeedd09b

echo '===== upload the android part====='
fir publish android/app/build/outputs/apk/app-debug.apk \
--token=66af5c09c6a70dc42e36c6c5aeedd09b \
--open=true

echo '===== upload the ios part====='
fir publish ios/HelloReact.ipa \
--token=66af5c09c6a70dc42e36c6c5aeedd09b \
--open=true