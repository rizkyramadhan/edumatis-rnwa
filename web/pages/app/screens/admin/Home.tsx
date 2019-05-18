import SideNav from "@app/libs/nav/SideNav";
import Kewajiban from "./Kewajiban/Kewajiban";
import SideBar from "./SideBar";
import Pengumuman from "./Pengumuman/Pengumuman";
import Kelas from "./Kelas/Kelas";
import Transaksi from "./Transaksi/Transaksi";

export default SideNav(
  {
    Transaksi: { screen: Transaksi },
    Kewajiban: { screen: Kewajiban },
    Pengumuman: { screen: Pengumuman },
    Kelas: { screen: Kelas }
  },
  {
    contentComponent: SideBar
  }
);
