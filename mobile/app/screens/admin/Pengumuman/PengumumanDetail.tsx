import UIBody from "@app/libs/ui/UIBody";
import UICol from "@app/libs/ui/UICol";
import UIContainer from "@app/libs/ui/UIContainer";
import UIFieldText from "@app/libs/ui/UIFieldText";
import UIHead from "@app/libs/ui/UIHead";
import UIRow from "@app/libs/ui/UIRow";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import UIFieldSelectNative from "@app/libs/ui/UIFieldSelectNative";
import KelasPicker from "../Kelas/KelasPicker";
import { Text } from "react-native";
import UIButton from "@app/libs/ui/UIButton";
import updateRecord from "@app/libs/queries/crud/updateRecord";
import createRecord from "@app/libs/queries/crud/createRecord";

export default observer(({ navigation }: any) => {
  const data = useObservable({
    loading: true,
    form: navigation.getParam("item")
  });

  return (
    <UIContainer>
      <UIHead
        title={` Pengumuman ` + (data.form.id ? `#${data.form.id}` : `Baru`)}
        onBack={() => {
          navigation.goBack();
        }}
      >
        <UIButton
          onPress={async () => {
            if (data.form.id) {
              data.form.id = parseInt(data.form.id);
              await updateRecord("pengumuman", data.form);
            } else {
              await createRecord("pengumuman", data.form);
            }
            navigation.goBack();
          }}
        >
          Simpan
        </UIButton>
      </UIHead>
      <UIBody>
        <UIFieldText
          label="Text Pengumuman"
          setValue={(value: any) => {
            data.form.pengumuman = value;
          }}
          value={data.form.pengumuman}
        />

        <UIRow>
          <UICol size={4}>
            <UIFieldSelectNative
              label="Status"
              items={[
                { value: "aktif", label: "Aktif" },
                { value: "non-aktif", label: "Non-Aktif" }
              ]}
              value={data.form.status}
              setValue={(v: any) => {
                data.form.status = v;
              }}
            />
          </UICol>
        </UIRow>
        <KelasPicker
          form={data.form}
          renderKelas={(kelas: any, detail: any) => {
            return (
              <Text
                style={{ paddingLeft: 15, paddingVertical: 10, color: "#333" }}
              >
                {Object.keys(kelas.murid).length === 1
                  ? `Untuk semua murid di kelas ${detail.nama_kelas}`
                  : `Khusus untuk murid dibawah ini`}
              </Text>
            );
          }}
        />
      </UIBody>
    </UIContainer>
  );
});
