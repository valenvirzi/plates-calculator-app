import Plate from "./Plate";

// TODO: Make the styles to show the loaded barbell
const Barbell = () => {
  return (
    <div className="barbellBar w-4/5 bg-slate-400 h-6 relative flex items-center gap-1 text-white">
      <div className="barbellWeight flex items-center justify-center bg-slate-600 h-10 w-1/12">
        <span className="font-semibold">20</span>
      </div>
      <Plate color="slate" opacity={800} size={32} weight={20} />
      <Plate color="slate" opacity={800} size={32} weight={20} />
    </div>
  );
};

export default Barbell;
