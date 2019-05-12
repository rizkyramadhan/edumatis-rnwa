import login from "@app/libs/queries/user/login";
import { flow, types } from "mobx-state-tree";
import AsyncStorage from "@app/libs/utils/AsyncStorage";
import { UserRecord } from "./User";
import List from "@app/libs/utils/List";
import Record from "@app/libs/utils/Record";
import config from "@app/config";

export const SessionRecord = Record({
  tableName: "session",
  columns: {
    id: types.maybe(types.string),
    client_id: types.maybe(types.integer),
    user: UserRecord
  },
  actions: (self: any) => ({
    login: flow(function*(client_id, username, password) {
      try {
        const response = yield login(client_id, username, password);
        yield AsyncStorage.setItem("SESSION", JSON.stringify(response));
        return response;
      } catch (e) {
        console.warn(e);
        return false;
      }
    }),
    restore: function(session: any) {
      self.id = session.id;
      self[config.table + "_id"] = session[config.table + "_id"];
      self[config.table] = session[config.table];
    },
    logout: flow(function*() {
      yield AsyncStorage.removeItem("SESSION");
      self.id = null;
      self[config.table + "_id"] = null;
      self[config.table] = null;
    })
  })
});

export const SessionList = List({
  record: SessionRecord,
  query: `{
    id
    user_id
  }`
});
