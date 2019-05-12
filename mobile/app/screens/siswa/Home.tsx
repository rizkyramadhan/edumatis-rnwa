import React from "react";
import { View } from "react-native";
import UIButton from "@app/libs/ui/UIButton";
import { RootStore } from "@app/stores/RootStore";

export default ({ navigation }: any) => {
  return (
    <UIButton
      onPress={() => {
        (RootStore.session as any).logout();
        console.log(navigation);
      }}
    >
      Logout
    </UIButton>
  );
};
