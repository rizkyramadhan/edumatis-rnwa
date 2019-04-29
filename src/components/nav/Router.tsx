import { createStackNavigator } from "react-navigation";
import { NavigationRouteConfigMap } from "react-navigation";
import { Platform } from "react-native";
import { createSwitchNavigator } from "@react-navigation/core";

export const Router = (routeConfigMap: NavigationRouteConfigMap) => {
  if (Platform.OS !== "web")
    return createStackNavigator(routeConfigMap, {
      headerMode: "none"
    });
  else return createSwitchNavigator(routeConfigMap);
};
