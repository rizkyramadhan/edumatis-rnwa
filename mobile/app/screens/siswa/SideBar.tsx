import config from "@app/config";
import { createNavigateTo } from "@app/libs/nav/NavContainer";
import UIImage from "@app/libs/ui/UIImage";
import { RootStore } from "@app/stores/RootStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = observer((props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...props.style,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center"
      }}
    >
      <UIImage
        style={{
          width: 20,
          margin: 10,
          height: 20
        }}
        source={props.image}
      />
      <Text style={{ color: config.color.mainText }}>{props.text}</Text>
    </TouchableOpacity>
  );
});

export default ({ navigation }: any) => {
  const navigateTo = createNavigateTo(navigation);

  return (
    <View style={s.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <UIImage
          source={require("@app/imgs/logo.png")}
          mobileStyle={{
            height: 160
          }}
          style={{
            width: "70%",
            paddingTop: 20,
            paddingBottom: 25
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          text="Kewajiban"
          onPress={() => {
            navigateTo("Kewajiban");
          }}
          image={require("@app/imgs/kewajiban.png")}
        />
        <Button
          text="Pengumuman"
          onPress={() => {
            navigateTo("Pengumuman");
          }}
          image={require("@app/imgs/pengumuman.png")}
        />

        <Button
          text="Logout"
          style={{ marginTop: 20 }}
          image={require("@app/imgs/logout.png")}
          onPress={() => {
            (RootStore.session as any).logout();
            navigation.popToTop();
            navigation.replace("Login");
          }}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: config.color.main
  }
});
