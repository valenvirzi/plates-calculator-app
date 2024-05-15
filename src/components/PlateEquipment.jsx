import PropTypes from "prop-types";

const PlateEquipment = ({ weight, units, massUnit, color }) => {
  return (
    <button
      type="button"
      className={`flex aspect-square flex-col items-center justify-around rounded-full ${color} p-4 md:p-6 lg:min-w-32`}
    >
      <h4 className="text-lg font-medium md:text-xl">
        {weight}
        {massUnit}
      </h4>
      <span className="text-sm lg:text-base">{units} units</span>
    </button>
  );
};

PlateEquipment.propTypes = {
  weight: PropTypes.number.isRequired,
  units: PropTypes.number.isRequired,
  massUnit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default PlateEquipment;
