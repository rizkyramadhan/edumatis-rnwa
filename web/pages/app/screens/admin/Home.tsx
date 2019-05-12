import SideNav from "@app/libs/nav/SideNav";
import Kewajiban from "./Kewajiban";
import SideBar from "./SideBar";
import Pengumuman from "./Pengumuman";

export default SideNav(
  {
    Kewajiban: { screen: Kewajiban },
    Pengumuman: { screen: Pengumuman }
  },
  {
    contentComponent: SideBar
  }
);
