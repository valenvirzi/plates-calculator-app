// TODO: import { Link } from "react-router-dom";

const NavItem = ({ title, svg }) => {
  return (
    <div className="flex flex-col items-center gap-2 hover:text-white ">
      {/* TODO: Find a way to change SVG's color on active,hover,etc. */}
      {svg}
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

export default NavItem;
