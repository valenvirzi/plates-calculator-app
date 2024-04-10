import NavItem from "./NavItem.jsx";

const NavBar = () => {
  const SECTIONS = [
    { title: "Equipment", svg: "equipment", alt: "Equipment" },
    { title: "Graphs", svg: "graphs", alt: "Graphs" },
    { title: "Calculator", svg: "calculator", alt: "Calculator" },
    { title: "Timer", svg: "timer", alt: "Timer" },
    { title: "Settings", svg: "settings", alt: "Settings" },
  ];
  return (
    <nav className="flex flex-row gap-2 h-8">
      <NavItem section={SECTIONS[0]} />
    </nav>
  );
};

export default NavBar;
