import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    // TODO: Find a way to make the Header stick to the top of the page and the Footer to the bottom
    <div className="fixed flex h-20 w-full items-center justify-around bg-sky-500 py-4 md:h-24 md:py-6">
      <h1 className="text-3xl font-semibold text-white md:text-4xl">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
