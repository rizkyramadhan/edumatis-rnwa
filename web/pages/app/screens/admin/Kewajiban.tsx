import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIList from "@app/libs/ui/UIList";
import React from "react";
import { View } from "react-native";

export default ({ navigation }: any) => {
  return (
    <UIContainer>
      <UIHead title="Kewajiban">
        <UIButton size="small">+ Kewajiban Baru</UIButton>
      </UIHead>
      <UIBody>
        <UIList
          data={[1, 2, 3]}
          render={() => {
            return <View />;
          }}
        />
      </UIBody>
    </UIContainer>
  );
};
