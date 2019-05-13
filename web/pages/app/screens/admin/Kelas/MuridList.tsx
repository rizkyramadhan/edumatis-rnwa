import UIButton from "@app/libs/ui/UIButton";
import UIImage from "@app/libs/ui/UIImage";
import UIList from "@app/libs/ui/UIList";
import UIListItem from "@app/libs/ui/UIListItem";
import { observer, useObservable } from "mobx-react-lite";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default observer(
  (data: { kelas: any; list: any[]; loading: boolean; navigation: any }) => {
    const meta = useObservable({
      checked: [] as any
    });
    if (!data.list) return null;

    return (
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            borderBottomColor: "#ddd",
            borderBottomWidth: 2,
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "#999" }}>
            Total Murid: {data.list.length}
            {meta.checked.length > 0 &&
              ` • Murid Terpilih: ${meta.checked.length}`}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            {meta.checked.length > 0 && (
              <UIButton
                size="small"
                fill="outline"
                style={{ margin: 0, marginLeft: 8 }}
                labelStyle={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 2,
                  paddingBottom: 2,
                  paddingHorizontal: 0
                }}
              >
                <UIImage
                  source={require("@app/imgs/move.png")}
                  style={{ width: 18, height: 18, marginLeft: 8 }}
                />
                Pindah Ke Kelas Lain
              </UIButton>
            )}
            <UIButton
              size="small"
              fill="outline"
              style={{ margin: 0, marginLeft: 8 }}
              labelStyle={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 2,
                paddingBottom: 2,
                paddingHorizontal: 0
              }}
            >
              <UIImage
                source={require("@app/imgs/share.png")}
                style={{ width: 12, height: 12, marginLeft: 8 }}
              />
              Export CSV
            </UIButton>
            <UIButton
              size="small"
              style={{ margin: 0, marginLeft: 8 }}
              labelStyle={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 2,
                paddingBottom: 2,
                paddingHorizontal: 0
              }}
              onPress={() => {
                data.navigation.navigate("MuridDetail", {
                  item: {},
                  kelas: data.kelas
                });
              }}
            >
              <UIImage
                source={require("@app/imgs/plus.png")}
                style={{ width: 12, height: 12, marginLeft: 8 }}
              />
              Tambah Siswa
            </UIButton>
          </View>
        </View>
        <UIList
          data={data.list}
          extraData={meta.checked.length}
          loading={data.loading}
          render={(list: any) => {
            const item = list.item;
            return (
              <View
                style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
              >
                <TouchableOpacity
                  style={{
                    height: 60,
                    paddingLeft: 10,
                    paddingRight: 3,
                    borderBottomColor: "#ccc",
                    borderBottomWidth: 1,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    const idx = meta.checked.indexOf(parseInt(item.id));
                    if (idx >= 0) {
                      meta.checked.splice(idx, 1);
                    } else {
                      meta.checked.push(parseInt(item.id));
                    }
                  }}
                >
                  <Text style={{ fontSize: 20 }}>
                    {meta.checked.indexOf(parseInt(item.id)) >= 0 ? "☑" : "☐"}
                  </Text>
                </TouchableOpacity>
                <UIListItem
                  style={{
                    height: 60,
                    flex: 1
                  }}
                  onPress={() => {
                    data.navigation.navigate("MuridDetail", {
                      item,
                      kelas: data.kelas
                    });
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{
                        paddingRight: 10,
                        fontSize: 17,
                        fontWeight: "bold"
                      }}
                    >
                      {list.index + 1}
                    </Text>
                    <View>
                      <Text style={{ fontSize: 16 }}>{item.nama_murid}</Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={{ fontSize: 13 }}>
                          {item.is_active === "y" ? "Aktif" : "Non-Aktif"}
                          &nbsp; &bull; &nbsp;
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            color: !item.data ? "#ccc" : "green"
                          }}
                        >
                          {item.data ? `Data diri tersedia` : `Tanpa data diri`}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#999",
                        textAlign: "right"
                      }}
                    >
                      NSA: {item.nsa}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#999",
                        textAlign: "right"
                      }}
                    >
                      NISN: {item.nisn}
                    </Text>
                  </View>
                </UIListItem>
              </View>
            );
          }}
        />
      </View>
    );
  }
);
