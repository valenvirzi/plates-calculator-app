import Header from "../components/Header";

const Equipment = () => {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-black pb-44">
      <Header title="Equipment" />
      {/* TODO: Start making the main pages for the app */}
      <main className="mt-4 flex w-full flex-col items-center gap-4 pt-24">
        <div className="flex flex-col items-center gap-2 text-white">
          <h2 className="text-3xl font-semibold">Available Plates</h2>
          <p className="">( Tap plates to edit )</p>
        </div>
        <div className="grid w-2/4 grid-cols-3 place-content-center justify-items-center gap-3 gap-y-6 p-4 text-white max-lg:w-full">
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-6 md:min-w-32"
          >
            <h4 className="text-xl font-medium">50kg</h4>
            <span className="">20 units</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Equipment;
