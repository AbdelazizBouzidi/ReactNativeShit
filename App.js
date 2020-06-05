import React, { Component } from "react";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

import Login from "./components/accounts/Login";
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

// export default function App() {
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <Text style={styles.hello}>HELLO</Text>
//         <Text style={styles.vicer}>Vicer</Text>
//       </View>
//       {/* <View style={{ flex: 3, backgroundColor: "ffffff" }} /> */}
//     </View>
//   );
// }

export default (props) => {
  let [fontsLoaded] = useFonts({
    "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
    "Comfortaa-Light": require("./assets/fonts/Comfortaa-Light.ttf"),
    "coolvetica-rg": require("./assets/fonts/coolveticarg.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Login />;
  }
};
