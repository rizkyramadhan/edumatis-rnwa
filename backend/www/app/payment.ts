import { send } from ".";
import { query } from "./api";

export default async function(ctx: any) {
  const json = (ctx.request as any).body;
  const res = await query(
    `mutation ($data: transaksi_set_input!){
    update_transaksi(where: {id: {_eq: ${json.external_id}}}, _set: $data) {
      affected_rows
    }
  }
  `,
    {},
    {
      variables: {
        data: {
          paid: json,
          status: "success"
        }
      }
    }
  );
  console.log(res);

  send(ctx, 200, { status: "ok" });
}
