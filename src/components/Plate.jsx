import PropTypes from "prop-types";

const Plate = ({ weight }) => {
  // TODO: Make "size" be based of "weight" but having into account the weight of the rest of the available plates so that the biggest plate has the biggest size and the smallest plate has the smallest size.
  return (
    <div
      className={`plate z-10 flex h-32 w-8 cursor-pointer items-center justify-center rounded-sm bg-slate-600 p-2 text-lg md:p-5`}
    >
      <span className="plateWeight font-semibold">{weight}</span>
    </div>
  );
};

Plate.propTypes = {
  weight: PropTypes.number.isRequired,
};

export default Plate;
