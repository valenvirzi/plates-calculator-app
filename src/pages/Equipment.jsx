import Header from "../components/Header";

const Equipment = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <Header title="Equipment" />
      {/* TODO: Start making the main pages for the app */}
      <main className="mt-4 flex w-full flex-col items-center gap-4 pb-44 pt-24">
        <div className="flex flex-col items-center gap-2 text-white">
          <h2 className="text-3xl font-semibold">Available Plates</h2>
          <p className="">( Tap plates to edit )</p>
        </div>
        <div className="grid w-full grid-cols-3 place-content-center justify-items-center gap-2 gap-y-5 p-4 text-white md:w-11/12 md:gap-3 md:gap-y-6 xl:w-1/2">
          {/* TODO: When the gap of the buttons collapses the sizes break, so i have to adjust properties if the screen is too small */}
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
          <button
            type="button"
            className="flex aspect-square flex-col items-center justify-around rounded-full bg-lime-600 p-5 md:p-6 lg:min-w-32"
          >
            <h4 className="text-lg font-medium md:text-xl">50kg</h4>
            <span className="text-sm lg:text-base">20 units</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Equipment;
