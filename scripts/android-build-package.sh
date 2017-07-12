echo '==== start generate key ===='
echo '==== step1: remove the old key ===='
pwd
keytool -delete -alias hello-react-key-alias \
-keystore android/app/hello-react-release-key.keystore \
-storepass changeW0rld! \
-keypass changeW0rld!

echo '==== step2: create new key ===='
keytool -genkey -v \
-keystore android/app/hello-react-release-key.keystore \
-alias hello-react-key-alias \
-keyalg RSA \
-keysize 2048 \
-validity 10000 \
-storepass changeW0rld! \
-keypass changeW0rld! \
-dname CN=YangYangCao,OU=TW,O=ORG,L=Wuhan,ST=Hubei,C=CN
echo '==== end generate key end ===='

echo '==== change the directory and generate a signed APK ===='
cd android/ && ./gradlew assembleRelease && cd ..
