import Header from "../components/Header";

const Settings = () => {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-black pb-44">
      <Header title="Settings" />
      {/* TODO: Start making the main pages for the app */}
      <main className="flex w-full flex-col items-center gap-8 px-32 py-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">
              Set measure units
            </h3>
            <p className="text-white">
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
