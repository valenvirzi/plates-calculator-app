// TODO: import { Link } from "react-router-dom";

const NavItem = ({ title, svg }) => {
  return (
    <div>
      <img className="w-4" src={`./${svg}.svg`} alt={`${title}`}></img>
      <h3 className="text-base">{title}</h3>
    </div>
  );
};

export default NavItem;
