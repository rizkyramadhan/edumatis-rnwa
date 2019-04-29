import { createAppContainer } from "react-navigation";
import { Router } from "../components/nav/Router";
import { Home } from "./Home";

export default createAppContainer(
  Router({
    Home
  })
);
