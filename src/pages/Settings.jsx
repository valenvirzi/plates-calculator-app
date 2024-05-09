import Header from "../components/Header";

const Settings = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <Header title="Settings" />
      {/* TODO: Start making the main pages for the app */}
      <main className="mt-4 flex h-screen w-full flex-col items-center pb-44 pt-24">
        <div className="flex w-11/12 items-center justify-between gap-4 md:w-2/3 xl:w-1/2">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-white md:text-xl">
              Set measure units
            </h3>
            <p className="text-sm text-white md:text-base">
              Switches mass units (Kg/Lb) and the decimal separator{" "}
              {`(","/".")`}
            </p>
          </div>
          <select className="p-1">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
      </main>
    </div>
  );
};

export default Settings;
