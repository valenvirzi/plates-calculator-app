import Header from "../components/Header";

const Settings = () => {
  // TODO: Ir al último chat de ChatGPT e implementar los cambios sugeridos.
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <Header title="Settings" />
      {/* TODO: Start making the main pages for the app */}
      <main className="mt-4 flex h-screen w-full flex-col items-center gap-6 pb-24 pt-20 md:pb-32 md:pt-24 lg:pb-36">
        <div className="flex w-11/12 items-center justify-between gap-4 md:w-10/12 lg:w-2/3 xl:w-3/5">
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
        <div className="flex w-11/12 items-center justify-between gap-4 md:w-10/12 lg:w-2/3 xl:w-3/5">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-white md:text-xl">
              Pick color theme
            </h3>
            <p className="text-sm text-white md:text-base"></p>
          </div>
          <select className="p-1">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </main>
    </div>
  );
};

export default Settings;
