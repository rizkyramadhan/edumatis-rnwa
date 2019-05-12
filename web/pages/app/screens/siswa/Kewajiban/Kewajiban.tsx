import rawQuery from "@app/libs/queries/crud/rawQuery";
import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIList from "@app/libs/ui/UIList";
import UIListItem from "@app/libs/ui/UIListItem";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import StackNav from "@app/libs/nav/StackNav";
import KewajibanDetail from "./KewajibanDetail";
import { RootStore } from "@app/stores/RootStore";
import { getSession } from "@app/libs/queries/user/getsetSession";

const Kewajiban = observer(({ navigation }: any) => {
  const data = useObservable({
    list: [],
    loading: true
  });
  useEffect(() => {
    let fetch = async () => {
      const session = await getSession();
      const kelasRaw = await rawQuery(`{
        kelas_murid(where: {murid_id: {_eq: ${session.murid.id}}}) {
          kelas_id
        }
      }`);

      if (kelasRaw && kelasRaw.kelas_murid && kelasRaw.kelas_murid.length > 0) {
        const kelas = kelasRaw.kelas_murid.map((k: any) => {
          return k.kelas_id.toString();
        });
        const result = await rawQuery(`{
        kewajiban(order_by: [{tipe_pembayaran: asc}, {id: asc}], 
          where: {kelas: {_has_keys_any: ${JSON.stringify(kelas)}}}) {
          id
          nama_kewajiban
          nominal
          tipe_pembayaran
          kelas
        }
      }`);
        data.list = result.kewajiban;
      }

      data.loading = false;
    };
    fetch();
  }, []);
  return (
    <UIContainer>
      <UIHead title="Kewajiban">
        <UIButton
          size="small"
          onPress={() => {
            navigation.navigate("KewajibanDetail", {
              item: {
                nominal: 100000,
                kelas: {}
              }
            });
          }}
        >
          + Kewajiban Baru
        </UIButton>
      </UIHead>
      <UIBody>
        <UIList
          data={data.list}
          loading={data.loading}
          render={(list: any) => {
            const item = list.item;
            return (
              <UIListItem
                onPress={() => {
                  navigation.navigate("KewajibanDetail", {
                    item: item
                  });
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 15, fontWeight: "bold", color: "#555" }}
                  >
                    {item.nama_kewajiban}
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    Rp {item.nominal.toLocaleString()}
                  </Text>
                </View>
                <View>
                  <Text>{item.tipe_pembayaran}</Text>
                </View>
              </UIListItem>
            );
          }}
        />
      </UIBody>
    </UIContainer>
  );
});

export default StackNav({
  Kewajiban: { screen: Kewajiban },
  KewajibanDetail: { screen: KewajibanDetail }
});
