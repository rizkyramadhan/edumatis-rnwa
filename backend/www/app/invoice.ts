import { send } from ".";
import axios from "axios";
const querystring = require("querystring");

export default async function(ctx: any) {
  const auth = `xnd_production_P4uGfL8m0eD7kJNsfVPSGKWZdWk8IF4lnezRxnGzVryhCwZjg`;
  const params = querystring.stringify(JSON.parse((ctx.request as any).body));
  let res;
  try {
    res = await axios.post(`https://api.xendit.co/v2/invoices`, params, {
      headers: {
        Authorization:
          "Basic " + (Buffer as any).from(auth + ":").toString("base64")
      }
    });
  } catch (e) {
    send(ctx, 400, { ...e.response.data, params });
    return;
  }
  send(ctx, 200, res.data);
}
