import Header from "../components/Header";

const Timer = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <Header title="Timer" />
      {/* TODO: Start making the main pages for the app */}
      <main className="flex h-screen w-full flex-col items-center justify-around pb-24 pt-20 md:pb-32 md:pt-24 lg:pb-36"></main>
    </div>
  );
};

export default Timer;
