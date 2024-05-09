import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    // TODO: Find a way to make the Header stick to the top of the page and the Footer to the bottom
    <div className="fixed flex h-24 w-full items-center justify-around bg-sky-500 py-6">
      <h1 className="text-4xl font-semibold text-white">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
