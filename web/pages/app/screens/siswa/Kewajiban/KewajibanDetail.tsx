import createRecord from "@app/libs/queries/crud/createRecord";
import { getSession } from "@app/libs/queries/user/getsetSession";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import UIWebView from "@app/libs/ui/UIWebView";
import { toJS } from "mobx";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import updateRecord from "@app/libs/queries/crud/updateRecord";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    loading: true,
    form: navigation.getParam("item")
  });
  let transaksi: any = {};
  if (data.form.transaksi.length > 0) {
    transaksi = data.form.transaksi[0];
  }
  console.log(toJS(transaksi.detail));
  useEffect(() => {
    const req = async function() {
      const session = await getSession();
      const nominalBeda =
        data.form.status === "Belum Lunas" &&
        transaksi &&
        transaksi.detail.amount !== data.form.nominal;

      if (!transaksi || nominalBeda) {
        if (!transaksi) {
          let res = await createRecord("transaksi", {
            kewajiban_id: toJS(data.form.id)
          });
          data.form.transaksi.push({ id: res });
          transaksi = data.form.transaksi[0];
        }

        if (nominalBeda) {
          data.form.transaksi[0].detail = null;
        }
        var params: any = {
          external_id: transaksi.id,
          payer_email: session.murid.email || `j@edumatis.id`,
          description: data.form.nama_kewajiban,
          amount: data.form.nominal
        };

        var myHeaders = new Headers();
        myHeaders.append("pragma", "no-cache");
        myHeaders.append("cache-control", "no-cache");
        const response: Response = await fetch(
          `https://backend.cap.edumatis.id/invoice`,
          {
            method: "POST",
            body: JSON.stringify(params),
            headers: myHeaders
          }
        );
        const json = await response.json();
        await updateRecord("transaksi", {
          id: transaksi.id,
          detail: json
        });

        data.form.transaksi[0].detail = json;
      }
      data.loading = false;
    };
    req();
  }, []);

  return (
    <UIContainer style={{ backgroundColor: "#F5FAFD" }}>
      <UIHead
        title={
          ` Kewajiban ` +
          (data.form.id
            ? `#${data.form.id}: ${data.form.nama_kewajiban} (${
                data.form.status
              })`
            : `Baru`)
        }
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          flex: 1,
          padding: 10,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator
          size="large"
          style={{ position: "absolute" }}
          color="#999"
        />
        <Text style={{ marginTop: 70 }}>
          {!!transaksi.detail
            ? "Menampilkan Pembayaran..."
            : "Membuat Invoice..."}
        </Text>
        {transaksi.detail && (
          <UIWebView
            style={{
              flex: 1,
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 99
            }}
            source={{
              html: `<iframe width="100%" height="100%" src="${
                transaksi.detail.invoice_url
              }"  frameborder="0"></iframe>`
            }}
          />
        )}
      </View>
    </UIContainer>
  );
});
