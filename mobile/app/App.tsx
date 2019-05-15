import StackNav from "@app/libs/nav/StackNav";
import Login from "./screens/Login";
import AdminHome from "./screens/admin/Home";
import SiswaHome from "./screens/siswa/Home";

export default StackNav({
  Login: { screen: Login }, 
  Admin: { screen: AdminHome },
  Siswa: { screen: SiswaHome }
});
