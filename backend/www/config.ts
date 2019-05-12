export default {
  url: "https://hasura.cap.edumatis.id/v1alpha1/graphql",
  secret: "edumatis123",
  table: "murid",
  use_client_id: true,
  identifierType: {
    id: "int",
    client_id: "int",
    password: "string",
    username: "string"
  },
  identifier: {
    id: "id",
    username: "nsa",
    fullname: "nama_murid",
    role: "role",
    password: "password",
    client_id: "sekolah_id"
  },
  columns: ["id", "nisn", "role", "nsa", "nama_murid", "password"]
};
