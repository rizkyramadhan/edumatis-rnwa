import React from "react";
import { Text, View } from "react-native";
import UIButton from "@app/libs/ui/UIButton";
import { RootStore } from "@app/stores/RootStore";

export default ({ navigation }: any) => {
  return (
    <View>
      <Text>Pengumuman</Text>
      <UIButton
        onPress={() => {
          (RootStore.session as any).logout();
          navigation.popToTop();
          navigation.replace("Login");
        }}
      >
        Logout
      </UIButton>
    </View>
  );
};
