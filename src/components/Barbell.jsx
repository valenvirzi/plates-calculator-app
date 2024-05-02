import Plate from "./Plate";

// TODO: Make the styles to show the loaded barbell
const Barbell = () => {
  return (
    <div className="barbellBar w-1/2 bg-slate-400 h-6 relative flex items-center rounded-sm gap-1 text-white">
      <div className="barbellWeight flex items-center rounded-sm justify-center bg-slate-400 h-10 w-10">
        <span className="font-semibold">20</span>
      </div>
      <Plate weight={20} />
      <Plate weight={20} />
    </div>
  );
};

export default Barbell;
