###2023-12-17

ToDO APP

Redux , typescript, Firbase

1. react-native-magnus 설치 https://github.com/jsartisan/react-native-magnus
   UI 프레임워크 설치

```
yarn add react-native-magnus
yarn add react-native-animatable react-native-modal react-native-vector-icons


```

2. react-native-svg and react-native-svg-transformer 설치
   https://www.npmjs.com/package/react-native-svg-transformer?activeTab

metro.config.js 파일 만들어줘야함
https://www.svgrepo.com/vectors/delete/
https://dev-in-seoul.tistory.com/27

```
yarn add react-native-svg
yarn add --dev react-native-svg-transformer
```

3. redux for react native

```
yarn add @reduxjs/toolkit react-redux redux --save
```

명령어는 Redux Toolkit과 React-Redux, 그리고 Redux 자체를 프로젝트에 추가합니다.

4. react native navigation 관련

```
 yarn add @react-navigation/native                                                ✔  07:04:53 PM 
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/drawer
yarn add @react-navigation/material-top-tabs
yarn add react-native-gesture-handler react-native-reanimated @react-native-community/masked-view

```

5. firebase 관련

```
1. android  app 폴더에 google-services.json 파일 추가
2. build.gradle dependencies 추가
 classpath 'com.google.gms:google-services:4.3.10'

3. app/build.gradle 맨 위에 추가
apply plugin: 'com.google.gms.google-services'
defaultConfig 에  multiDexEnabled true 추가
dependencies 에  implementation platform('com.google.firebase:firebase-bom:29.1.0') 추가


다음 후 콘솔로 이동하기전에
yarn add @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore

 각각 파이어베이스 접근, 인증, 데이터베이스 추가 기능 설치
```
