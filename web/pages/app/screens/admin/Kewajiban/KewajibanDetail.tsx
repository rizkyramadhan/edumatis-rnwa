import createRecord from "@app/libs/queries/crud/createRecord";
import deleteRecord from "@app/libs/queries/crud/deleteRecord";
import rawQuery from "@app/libs/queries/crud/rawQuery";
import updateRecord from "@app/libs/queries/crud/updateRecord";
import UIBody from "@app/libs/ui/UIBody";
import UIButton from "@app/libs/ui/UIButton";
import UICol from "@app/libs/ui/UICol";
import UIContainer from "@app/libs/ui/UIContainer";
import UIFieldSelectNative from "@app/libs/ui/UIFieldSelectNative";
import UIFieldText from "@app/libs/ui/UIFieldText";
import UIHead from "@app/libs/ui/UIHead";
import UIRow from "@app/libs/ui/UIRow";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Text, View, Alert, Platform } from "react-native";
import KelasPicker from "../Kelas/KelasPicker";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    form: navigation.getParam("item")
  });
  useEffect(() => {
    if (data.form.id) {
      rawQuery(`
      {
        kewajiban(where: {id: {_eq: ${data.form.id}}}) {
          kelas
          batas_pembayaran
          id
          nominal
          nama_kewajiban
          status
          tgl_batas_pembayaran_bulan
          tipe_pembayaran
        }
      }
    `).then((res: any) => {
        data.form = res.kewajiban[0];
      });
    }
  }, []);

  return (
    <UIContainer>
      <UIHead
        navigation={navigation}
        title={
          ` Kewajiban ` +
          (data.form.id
            ? `#${data.form.id}: ${data.form.nama_kewajiban}`
            : `Baru`)
        }
        onBack={() => {
          navigation.goBack();
        }}
      >
        <UIRow>
          <UIButton
            onPress={async () => {
              if (data.form.id) {
                await updateRecord("kewajiban", data.form);
              } else {
                await createRecord("kewajiban", data.form);
              }
              navigation.goBack();
            }}
          >
            Simpan
          </UIButton>
          <UIButton
            style={{
              backgroundColor: "red",
              marginLeft: -5
            }}
            onPress={async () => {
              if (Platform.OS === "web") {
                confirm("Apakah anda yakin ingin menghapus kewajiban ini ?")
              } else {
                  Alert.alert(
                    'Menghapus Kewajiban',
                    'Apakah Anda yakin ingin menghapus kewajiban ini ?', [
                    {
                      text: 'NO', style: 'cancel', onPress: () => {}
                    },
                    {
                      text: 'YES', onPress: async () => {
                        if (data.form.id) {
                          await deleteRecord("kewajiban", { id: data.form.id });
                        } 
                        navigation.goBack();
                      }
                    }
                  ])
                }
              }
            }
          >
            Hapus
          </UIButton>
        </UIRow>
      </UIHead>
      <UIBody>
        <UIFieldText
          label="Nama Kewajiban"
          setValue={(value: any) => {
            data.form.nama_kewajiban = value;
          }}
          value={data.form.nama_kewajiban}
        />
        <UIRow>
          <UICol size={4} sizesm={6} sizexs={6} sizemd={6}>
            <UIFieldText
              label="Nominal"
              setValue={(value: any) => {
                data.form.nominal = value;
              }}
              value={data.form.nominal}
            />
          </UICol>
          <UICol size={4} sizesm={6} sizexs={6} sizemd={6}>
            <UIFieldSelectNative
              label="Tipe Pembayaran"
              items={["Bulanan", "Insidentil"]}
              setValue={(value: any) => {
                data.form.tipe_pembayaran = value;
              }}
              value={data.form.tipe_pembayaran}
            />
          </UICol>
        </UIRow>
        <KelasPicker
          form={data.form}
          renderKelasTitle={(kelas: any) => (
            <Text>Rp {parseInt(kelas.nominal).toLocaleString()} </Text>
          )}
          renderKelas={(kelas: any) => {
            return (
              <View>
                <UIFieldText
                  label="Nominal untuk semua murid kelas ini"
                  value={kelas.nominal}
                  setValue={(value: any) => {
                    kelas.nominal = value;
                  }}
                />
                <Text style={{ padding: 10, paddingLeft: 15, color: "#333" }}>
                  Khusus untuk murid ini, di set sesuai nominal tertera:
                </Text>
              </View>
            );
          }}
          renderMurid={(murid: any, kelas: any) => {
            return (
              <UICol size={6} >
                <UIFieldText
                  label="Nominal"
                  value={murid.nominal || kelas.nominal}
                  setValue={(value: any) => {
                    murid.nominal = value;
                  }}
                />
              </UICol>
            );
          }}
        />
      </UIBody>
    </UIContainer>
  );
});
