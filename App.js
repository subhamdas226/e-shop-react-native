import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox  } from "react-native";
import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";

import ignoreWarnings from 'ignore-warnings';

// ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])

// LogBox.ignoreLogs([
//     'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
//     'NativeBase: The contrast ratio of',
//     "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
// ])

LogBox.ignoreAllLogs(true)

// Redux
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
  return (
    <Provider store = { store }>
      <NavigationContainer>
        {/* <StyleProvider> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Header />
        {/* <ProductContainer /> */}
        <Main />
        <StatusBar style="auto" />
        {/* </StyleProvider> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gainsboro',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
