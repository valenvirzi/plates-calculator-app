import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div className="flex flex-col items-center">
      <Outlet />
      <NavBar />
    </div>
  );
};

export default Root;
