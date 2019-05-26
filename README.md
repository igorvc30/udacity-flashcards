# Mobile FlashCards

This is the the final assessment project for Udacity's React Native course where a Mobile Flashcard was created to help users' study.

- Users will be able to crete a deck and add cards with a question and a answer.
- Users will be able to take a Quiz for a certain deck.
- Users will be able to view decks details.
- Users will receive a local notification in case he didn't take any quiz today.

### New features!

- User will be able to visualize decks statistics.
- User will be able to choose a color for the deck.
- User will be able delete a deck.

## Style Guides

- [Airbnb React/JSX Style Guide] - This style guide is mostly based on the standards that are currently prevalent in JavaScript. Follow [this](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a) tutorial to configure ESLint in VSCode.
- [Udacity Git Commit] - This style guide acts as the official guide to follow when commiting to this project.

### Tech

Flashcards uses a number of open source projects to work properly:

This project was bootstrapped with [Creat React Native App - Expo CLI](https://facebook.github.io/react-native/docs/getting-started.html).

- [React] - A JavaScript library for building user interfaces.
- [React Native] - React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.
- [React Navigation] - Routing and navigation for React Native apps
- [NativeBase] - NativeBase is a sleek, ingenious and dynamic front-end framework created by passionate React Loving team at Geekyants.com to build cross platform Android & iOS mobile apps using ready to use generic components of React Native.
- [React Redux] - A predictable state container for JavaScript applications.
- [Redux Persist] - Persist and rehydrate a redux store.
- [Expo] - A free and open source toolchain built around React Native to help you build native iOS and Android apps using JavaScript and React.
- [Color Palette] - A react native module for simple hex color selection

## Start Developing

This repository includes the code for the react native app that you'll use to develop and interact with the project. This project was developed using Android 8.1.0 using a Zenfone Max Pro M1 (ASUS_X00TDB).

To get started developing right away:

- Install dependencies and run the app

```sh
$ git clone https://github.com/igorvc30/udacity-flashcards.git
$ cd udacity-flashcards
$ yarn install
$ expo start
```

Once the Expo Devtools page is loaded, change the Connection to LOCAL (for better liverload experience) and then Click at the button: Run Android Device/Emulator. (Remember to enable Developer option and USB debugging in case you use your smartphone.)

[react]: https://reactjs.org/
[react native]: https://facebook.github.io/react-native/
[react navigation]: https://reactnavigation.org/docs/en/getting-started.html/
[nativebase]: https://nativebase.io/
[airbnb react/jsx style guide]: https://github.com/airbnb/javascript/tree/master/react
[udacity git commit]: https://udacity.github.io/git-styleguide/
[react redux]: https://react-redux.js.org/
[expo]: https://expo.io/
[redux persist]: https://github.com/rt2zz/redux-persist
[color palette]: https://www.npmjs.com/package/react-native-color-palette
