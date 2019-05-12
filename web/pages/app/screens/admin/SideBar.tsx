import UIImage from "@app/libs/ui/UIImage";
import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import config from "@app/config";
import { RootStore } from "@app/stores/RootStore";

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
          padding: 10,
          height: 20
        }}
        source={props.image}
      />
      <Text style={{ color: config.color.mainText }}>{props.text}</Text>
    </TouchableOpacity>
  );
});

export default ({ navigation }: any) => {
  return (
    <View style={s.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <UIImage
          source={require("@app/imgs/logo.png")}
          style={{
            width: "70%",
            paddingTop: 20,
            paddingBottom: 25
          }}
        />
      </View>
      <Button
        text="Kewajiban"
        onPress={() => {
          navigation.replace("Kewajiban");
        }}
        image={require("@app/imgs/kewajiban.png")}
      />
      <Button
        text="Pengumuman"
        onPress={() => {
          navigation.replace("Pengumuman");
        }}
        image={require("@app/imgs/pengumuman.png")}
      />
      <Button
        text="Kelas & Murid"
        onPress={() => {
          navigation.replace("Kelas");
        }}
        image={require("@app/imgs/kelas.png")}
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
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: config.color.main
  }
});
