# Intro to Design System

SE104 · UI/UX demo app that compares **good practise** (tokens + components + theming) with **bad practise** (hardcoded one-screen UI).

Built with React Native.

## Figma

Design file:

[Introduction to Design System](https://www.figma.com/design/C0CatMa2rYyU4dEmsauRmw/Introduction-to-Design-System?node-id=1-105&t=ezQw5hH59ndmCsyu-0)

## Requirements

- Node.js `>= 22.11.0`
- npm or Yarn
- Xcode (for iOS) / Android Studio (for Android)
- CocoaPods (for iOS)

Follow the official React Native [environment setup](https://reactnative.dev/docs/set-up-your-environment) guide first.

## Install

```sh
git clone https://github.com/bassamelbdrawy/introToDesignSystem.git
cd introToDesignSystem
npm install
```

### iOS pods

```sh
bundle install
cd ios
bundle exec pod install
cd ..
```

## Run

Start Metro:

```sh
npm start
```

In another terminal:

```sh
# iOS
npm run ios

# Android
npm run android
```

## What’s inside

- `Home` — choose Good practise or Bad practise
- `GoodPractise` — screen built from design-system tokens and components, with light/dark theme switch
- `BadPractise` — same layout hardcoded in one file (no tokens/components/theme)

Presentation notes: see [`PRESENTATION.md`](./PRESENTATION.md)

## Author

Bassam Elbadrawy
