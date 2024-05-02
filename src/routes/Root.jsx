import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Outlet />
      <div className="h-1/5 w-full"></div>
      <NavBar />
    </div>
  );
};

export default Root;
