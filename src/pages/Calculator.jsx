import Barbell from "../components/Barbell.jsx";
import Header from "../components/Header.jsx";

const Calculator = () => {
  return (
    <div className="bg-black h-full w-full flex flex-col items-center justify-between pb-8">
      <Header title="Calculator" />
      {/* TODO: Start making the main pages for the app */}
      <div className="flex flex-col h-full w-full items-center justify-between py-8">
        <form className="flex flex-col gap-1" name="weightForm">
          <label className="text-white" htmlFor="desiredWeight">
            Desired Weight:
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="Enter your desired weight"
              name="desiredWeight"
              id="desiredWeight"
              className="py-2 px-4 flex items-center justify-center text-center text-lg remove-arrow rounded-sm"
            />
            <button
              type="button"
              // TODO: Add a function that triggers "onPointerDown" that sends the desiredWeight to be displayed on screen both on text and on the barbell
              className="rounded-sm border-none p-1 bg-sky-500 group hover:animate-[spin_300ms_ease] hover:bg-white"
            >
              <svg
                className="h-9 w-9"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white group-hover:fill-sky-500"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </form>

        <Barbell />
        {
          //TODO: Calculate "totalWeight" by adding up the weight of all the currently loaded plates + the weight of the barbell
        }
        <h2 className="text-white text-2xl font-semibold">
          totalWeight Kg loaded
        </h2>
      </div>
    </div>
  );
};

export default Calculator;
