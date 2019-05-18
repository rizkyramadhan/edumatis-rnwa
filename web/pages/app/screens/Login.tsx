import query from "@app/libs/queries/crud/query";
import { checkSession } from "@app/libs/queries/user/checkSession";
import UIButton from "@app/libs/ui/UIButton";
import UIFieldText from "@app/libs/ui/UIFieldText";
import UIImage from "@app/libs/ui/UIImage";
import { RootStore } from "@app/stores/RootStore";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    sekolah_id: "",
    nsa: "",
    password: ""
  });
  const meta = useObservable({
    sekolah: "",
    murid: "",
    loading: true
  });

  useEffect(() => {
    (async () => {
      const session = await checkSession();
      if (session && session.murid && session.murid.nsa) {
        if (session.murid.nsa === "admin") {
          navigation.replace("Admin");
        } else {
          navigation.replace("Siswa");
        }
        return;
      }
      meta.loading = false;
    })();
  }, []);

  if (meta.loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff"
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "#fff"
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingTop: 100,
        maxWidth: 800,
        justifyContent: "center",
        alignSelf: "center",
        minWidth: 430
      }}
    >
      <UIImage
        source={require("@app/imgs/logob.png")}
        mobileStyle={{ height: 120, marginBottom: 20 }}
        style={{ width: 200 }}
      />
      <UIFieldText
        label="ID Sekolah"
        sublabel={meta.sekolah}
        value={data.sekolah_id}
        style={{ width: "70%" }}
        setValue={(value: string) => (data.sekolah_id = value)}
        onBlur={async () => {
          try {
            let res = await query("sekolah", ["nama_sekolah"], {
              where: { id: parseInt(data.sekolah_id) },
              useSession: false
            });
            if (res && res.nama_sekolah) {
              meta.sekolah = res.nama_sekolah;
            } else {
              meta.sekolah = "Sekolah tidak ditemukan";
            }
          } catch (e) {}
        }}
      />
      <UIFieldText
        label="Nomor Induk / NSA"
        sublabel={meta.murid}
        value={data.nsa}
        style={{ width: "70%" }}
        setValue={(value: string) => (data.nsa = value)}
        onBlur={async () => {
          let res = await query("murid", ["nama_murid"], {
            where: { sekolah_id: parseInt(data.sekolah_id), nsa: data.nsa },
            useSession: false
          });
          if (res && res.nama_murid) {
            meta.murid = "Nama: " + res.nama_murid;
          } else {
            meta.murid = "Nomor Induk tidak ditemukan";
          }
        }}
      />
      <UIFieldText
        type="password"
        label="Password"
        value={data.password}
        setValue={(value: string) => (data.password = value)}
        style={{ width: "70%" }}
      />
      <UIButton
        style={{ width: "50%" }}
        onPress={async () => {
          meta.loading = true;
          let session = await (RootStore.session as any).login(
            data.sekolah_id,
            data.nsa,
            data.password
          );

          if (session && session.murid && session.murid.nsa) {
            if (session.murid.nsa === "admin") {
              navigation.replace("Admin");
            } else {
              navigation.replace("Siswa");
            }
            return;
          }
          meta.loading = false;
        }}
      >
        Login
      </UIButton>
    </ScrollView>
  );
});
