import Kewajiban from "./Kewajiban/Kewajiban";
import SideBar from "./SideBar";
import SideNav from "@app/libs/nav/SideNav";

export default SideNav(
  {
    Kewajiban: { screen: Kewajiban }
  },
  {
    contentComponent: SideBar
  }
);
