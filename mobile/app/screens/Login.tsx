import query from "@app/libs/queries/crud/query";
import UIButton from "@app/libs/ui/UIButton";
import UIFieldText from "@app/libs/ui/UIFieldText";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootStore } from "@app/stores/RootStore";
import { checkSession } from "@app/libs/queries/user/checkSession";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    sekolah_id: "1",
    nsa: "1",
    password: "123"
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
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UIFieldText
        label="ID Sekolah"
        sublabel={meta.sekolah}
        value={data.sekolah_id}
        style={{ width: "70%" }}
        setValue={(value: string) => (data.sekolah_id = value)}
        onBlur={async () => {
          let res = await query("sekolah", ["nama_sekolah"], {
            where: { id: data.sekolah_id },
            useSession: false
          });
          if (res && res.nama_sekolah) {
            meta.sekolah = res.nama_sekolah;
          } else {
            meta.sekolah = "Sekolah tidak ditemukan";
          }
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
            where: { sekolah_id: data.sekolah_id, nsa: data.nsa },
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
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
