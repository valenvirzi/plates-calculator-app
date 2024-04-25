import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
};

export default Root;
