import PropTypes from "prop-types";

const Plate = ({ color, opacity, size, weight }) => {
  // TODO: Make "size" be based of "weight" but having into account the weight of the rest of the available plates so that the biggest plate has the biggest size and the smallest plate has the smallest size.
  return (
    <div
      className={`plate flex items-center justify-center text-xl p-5 rounded-sm w-8 h-${size} bg-${color}${
        opacity ? `-${opacity}` : ""
      }`}
    >
      <span className="plateWeight font-semibold">{weight}</span>
    </div>
  );
};

Plate.propTypes = {
  color: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

export default Plate;
