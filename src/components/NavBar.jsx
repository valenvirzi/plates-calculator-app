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
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-40 flex-row items-center justify-between bg-sky-500 px-4 py-9 max-md:h-24 max-md:gap-2 max-md:py-4 md:px-12">
      {SECTIONS.map((section) => {
        return (
          <Link key={section.svg} to={section.path}>
            <NavItem title={section.title} svg={section.svg} />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
