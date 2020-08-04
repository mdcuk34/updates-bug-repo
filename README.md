# Expo Updates Bug

This is a small repo to reproduce the expo-updates bug mentioned here: 
- [Github Issue](https://github.com/expo/expo/issues/9375)
- [Expo Forums](https://forums.expo.io/t/ios-asset-download-fails-on-ota-update/40764)

Steps to create this project:
- expo init & selected Bare Typescript
- added  `"sdkVersion": "38.0.0"` to `app.json`
- added `import 'expo-asset';` in `index.js`

