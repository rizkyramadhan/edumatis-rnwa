import { send } from ".";
import { query } from "./api";

export default async function(ctx: any) {
  const json = (ctx.request as any).body;
  const res = await query(
    `mutation ($paid: jsonb!){
    update_transaksi(where: {id: {_eq: ${
      json.external_id
    }}}, _set: {paid: $paid}) {
      affected_rows
    }
  }
  `,
    {},
    {
      variables: {
        paid: json,
        status: "success"
      }
    }
  );
  send(ctx, 200, { status: "ok" });
}
