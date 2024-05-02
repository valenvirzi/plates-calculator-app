import PropTypes from "prop-types";

const Plate = ({ weight }) => {
  // TODO: Make "size" be based of "weight" but having into account the weight of the rest of the available plates so that the biggest plate has the biggest size and the smallest plate has the smallest size.
  return (
    <div
      className={`plate flex items-center justify-center text-xl p-5 z-10 rounded-sm w-8 h-32 bg-slate-600 cursor-pointer`}
    >
      <span className="plateWeight font-semibold">{weight}</span>
    </div>
  );
};

Plate.propTypes = {
  weight: PropTypes.number.isRequired,
};

export default Plate;
