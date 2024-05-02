import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="w-full py-6 bg-sky-500 flex justify-evenly">
      <h1 className="text-white font-semibold text-4xl">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
