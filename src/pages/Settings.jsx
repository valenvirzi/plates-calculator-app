import Header from "../components/Header";

const Settings = () => {
  return (
    <div className="bg-black h-full w-full flex flex-col items-center pb-12">
      <Header title="Settings" />
      {/* TODO: Start making the main pages for the app */}
      <main className="flex flex-col w-full items-center gap-8 py-8 px-32">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold text-xl">
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
