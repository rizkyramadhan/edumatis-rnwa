import rawQuery from "@app/libs/queries/crud/rawQuery";
import UIBody from "@app/libs/ui/UIBody";
import UICol from "@app/libs/ui/UICol";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIRow from "@app/libs/ui/UIRow";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import UIJson from "@app/libs/ui/UIJson";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    form: navigation.getParam("item")
  });
  const item = data.form;
  useEffect(() => {
    if (data.form.id) {
      rawQuery(`
      {
        transaksi(where: {id: {_eq: ${data.form.id}}}) {
          detail
          paid
        }
      }
    `).then((res: any) => {
        if (res.transaksi.length > 0) {
          data.form.detail = res.transaksi[0].detail;
          data.form.paid = res.transaksi[0].paid;
        }
      });
    }
  }, []);

  return (
    <UIContainer>
      <UIHead
        navigation={navigation}
        title={`#${item.id} ${item.kewajiban.nama_kewajiban} - Rp ${(
          item.nominal || 0
        ).toLocaleString()}`}
        onBack={() => {
          navigation.goBack();
        }}
      />
      <UIBody>
        <UIRow>
          <UICol size={1} sizexs={4} sizemd={4}>
            Siswa:
          </UICol>
          <UICol size={11} sizexs={8} sizemd={8}>
            {item.murid.nama_murid}
          </UICol>
        </UIRow>
        <UIRow>
          <UICol size={1} sizexs={4} sizemd={4}>
            Kelas:
          </UICol>
          <UICol size={11} sizexs={8} sizemd={8}>
            {item.murid.kelas_murids[0].kelas.nama_kelas}
          </UICol>
        </UIRow>
        {data.form.detail && <UIJson data={data.form.detail} />}
      </UIBody>
    </UIContainer>
  );
});
