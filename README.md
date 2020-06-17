# 概要

ローカル環境で `ReactNative` を実行する

# 前提
- Xcode インストール済みであること

```
$ xcrun --version
xcrun version 50.
```

# 環境構築

```
# Node.js インストール
$ brew install node
$ node -v
v14.4.0

# React Native Client インストール
$ npm install -g react-native-cli
```

# プロジェクト作成

```
$ react-native init SampleProject

  Run instructions for iOS:
    • cd "{PATH TO}/learn-reactnative/SampleProject" && npx react-native run-ios
    - or -
    • Open SampleProject/ios/SampleProject.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "{PATH TO}/learn/learn-reactnative/SampleProject" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.
```

# デバック実行

```
$ cd {PATH TO}/SampleProject
$ npx react-native run-ios
```
