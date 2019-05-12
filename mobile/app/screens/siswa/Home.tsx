import UIButton from "@app/libs/ui/UIButton";
import { RootStore } from "@app/stores/RootStore";
import React from "react";

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
