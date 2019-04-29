import { NavigationNavigator } from "react-navigation";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBrowserApp } from "@react-navigation/web";

export default (Component: NavigationNavigator<any, any, any>) => {
  if (Platform.OS !== "web") {
    return createAppContainer(Component);
  } else {
    return createBrowserApp(Component);
  }
};
