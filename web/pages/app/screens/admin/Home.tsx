import SideNav from "@app/libs/nav/SideNav";
import Kewajiban from "./Kewajiban/Kewajiban";
import SideBar from "./SideBar";
import Pengumuman from "./Pengumuman/Pengumuman";
import Kelas from "./Kelas/Kelas";

export default SideNav(
  {
    Kelas: { screen: Kelas },
    Kewajiban: { screen: Kewajiban },
    Pengumuman: { screen: Pengumuman }
  },
  {
    contentComponent: SideBar
  }
);
