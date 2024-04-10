import { Link } from "react-router-dom";
import NavItem from "./NavItem.jsx";

const NavBar = () => {
  const SECTIONS = [
    { title: "Equipment", svg: "equipment", path: "/equipment" },
    { title: "Graphs", svg: "graphs", path: "/graphs" },
    { title: "Calculator", svg: "calculator", path: "/" },
    { title: "Timer", svg: "timer", path: "/timer" },
    { title: "Settings", svg: "settings", path: "/settings" },
  ];
  return (
    <nav className="flex flex-row gap-2 h-8">
      {SECTIONS.map((section) => {
        return (
          <Link key={section.svg} to={section.path}>
            <NavItem title={section.title} svg={section.svg} />
          </Link>
        );
      })}
      {/* <NavItem section={SECTIONS[0]} /> */}
    </nav>
  );
};

export default NavBar;
