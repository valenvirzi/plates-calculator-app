import Header from "../components/Header";

const Equipment = () => {
  return (
    <div className="bg-black h-full w-full flex flex-col items-center pb-12">
      <Header title="Equipment" />
      {/* TODO: Start making the main pages for the app */}
      <main className="flex flex-col p-4">
        <div className="flex flex-col text-white items-center gap-2">
          <h2 className="text-3xl font-semibold">Available Plates</h2>
          <p className="">( Tap plates to edit )</p>
        </div>
        <div className="grid text-white">
          <button
            type="button"
            className="flex flex-col items-center justify-center rounded-full bg-lime-700 aspect-square"
          >
            <h4>50kg</h4>
            <span>20 units</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Equipment;
