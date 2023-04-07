# MovieApp React Native App

This is a React Native application that allows users to browse for **Top Rated** movies. The app uses the [The Movie Database API (themoviedb.org)](https://developers.themoviedb.org/3/movies/) to fetch movie data and display it in a user-friendly format.

It includes ***lazy loading***, ***pre-fetched data for offline use***, ***pull-to-refresh*** functionality, and ***user-friendly indicators for data loading***. The app ***UI works well in portrait mode*** and ***handles network/device errors gracefully***. Simply follow the installation instructions to start browsing for movies right away!

#  Version Information

This project was built using:
-   React Native version 0.70.6
-   Node.js version 14.17.6
-   npm version 7.21.1

#  Installation

To install the app, follow these steps:

 1. Clone this repository to your local machine.
 ```
 git clone https://github.com/Shenith/movieApp.git
 ```

2. Navigate to the project directory and install the required dependencies:
```
cd movieApp
yarn
```

3. Install pods:

```
cd ios
pod install
```

4. Create a `.env` file in the root directory of the project and add your The Movie Database API (themoviedb.org) API key in the following format:
```
API_KEY=your-api-key-here
```

5. Run the app on an Android or iOS device or simulator:
```
npx react-native run-ios
```
or
```
npx react-native run-android
```

This will start the app and automatically install it on the device or simulator.


#  Technologies Used
This project was built using the following technologies:

 -    [React Native](https://reactnative.dev/): A JavaScript framework for building native mobile apps.
 -    [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static type checking.
 -    [Axios](https://github.com/axios/axios): A promise-based HTTP client for making API requests.
 -    [AsyncStorage](https://www.npmjs.com/package/@react-native-async-storage/async-storage): A simple, unencrypted, asynchronous, persistent, key-value storage system for React Native.
 -    [React Redux](https://react-redux.js.org/): A package that provides a predictable state container for managing the state of React components.
 -    [Redux Toolkit](https://redux-toolkit.js.org/): A package that simplifies the process of creating and managing Redux stores in a more opinionated way.
 -    [Redux Persist](https://www.npmjs.com/package/redux-persist): A package that provides a way to persist and rehydrate a Redux store.
