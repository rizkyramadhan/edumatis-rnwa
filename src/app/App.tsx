import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Router from "./components/nav/Router";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n Shake or press menu enu"
});
export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        geje mantb asd asd ini bisa React Native!
      </Text>
      <Text style={styles.instructions}>To get asdstarted, edit App.tsx</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <TouchableOpacity>
        <Router />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
