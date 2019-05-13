import UIBody from "@app/libs/ui/UIBody";
import UIContainer from "@app/libs/ui/UIContainer";
import UIHead from "@app/libs/ui/UIHead";
import { observer, useObservable } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Text, Platform } from "react-native";
import { getSession } from "@app/libs/queries/user/getsetSession";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    form: navigation.getParam("item")
  });

  useEffect(() => {
    const req = async function() {
      const session = await getSession();
      var params: any = {
        external_id: data.form.id,
        payer_email: session.murid.email || `j@edumatis.id`,
        description: data.form.nama_kewajiban,
        amount: data.form.nominal
      };

      var myHeaders = new Headers();
      myHeaders.append("pragma", "no-cache");
      myHeaders.append("cache-control", "no-cache");

      const response: Response = await fetch(`http://localhost/invoice`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: myHeaders
      });
      const json = await response.json();
      console.log(json);
    };
    req();
  }, []);

  return (
    <UIContainer>
      <UIHead
        title={
          ` Kewajiban ` +
          (data.form.id
            ? `#${data.form.id}: ${data.form.nama_kewajiban}`
            : `Baru`)
        }
        onBack={() => {
          navigation.goBack();
        }}
      />
      <UIBody>
        <Text>Status: {data.form.status} </Text>
      </UIBody>
    </UIContainer>
  );
});
