import Plate from "./Plate";

// TODO: Make the styles to show the loaded barbell
const Barbell = () => {
  return (
    <div className="barbellBar relative flex h-6 w-1/2 items-center gap-1 rounded-sm bg-slate-400 text-white">
      <div className="barbellWeight flex h-10 w-10 items-center justify-center rounded-sm bg-slate-400">
        <span className="font-semibold">20</span>
      </div>
      <Plate weight={20} />
      <Plate weight={20} />
      <Plate weight={20} />
    </div>
  );
};

export default Barbell;
