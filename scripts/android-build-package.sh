echo '==== start generate key ===='
echo '==== step1: remove the old key ===='
keytool -delete -alias hello-react-key-alias \
-keystore hello-react-release-key.keystore \
-storepass chnageW0rld! \
-keypass IChangeW0rld!

echo '==== step2: create new key ===='
keytool -genkey -v \
-keystore hello-react-release-key.keystore \
-alias hello-react-key-alias \
-keyalg RSA \
-keysize 2048 \
-validity 10000 \
-storepass chnageW0rld! \
-keypass IChangeW0rld! \
-dname CN=YangYangCao,OU=TW,O=ORG,L=Wuhan,ST=Hubei,C=CN
echo '==== end generate key end ===='

echo '==== change thedirectory and generate a signed APK ===='
cd android/ && ./gradlew assembleRelease && cd ..
