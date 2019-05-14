import StackNav from "@app/libs/nav/StackNav";
import NavContainer from "@app/libs/nav/NavContainer";
import Login from "./screens/Login";
import AdminHome from "./screens/admin/Home";
import SiswaHome from "./screens/siswa/Home";

export default NavContainer(StackNav({
  Login: { screen: Login },
  Admin: { screen: AdminHome },
  Siswa: { screen: SiswaHome }
}));
