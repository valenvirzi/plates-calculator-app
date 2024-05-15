import Header from "../components/Header";
import PlateEquipment from "../components/PlateEquipment";

const Equipment = () => {
  const AvailablePlates = [
    {
      weight: 25,
      units: 13,
      massUnit: "Kg", // TODO: Remove this property from the objects and make it a universal variable from a useState() managed from the Settings subpage.
      color: "bg-red-800", // TODO: Make a color picker for the PlateForm element and insert the choice on each object.
    },
    {
      weight: 25,
      units: 13,
      massUnit: "Kg", // TODO: Remove this property from the objects and make it a universal variable from a useState() managed from the Settings subpage.
      color: "bg-violet-800", // TODO: Make a color picker for the PlateForm element and insert the choice on each object.
    },
    {
      weight: 25,
      units: 13,
      massUnit: "Kg", // TODO: Remove this property from the objects and make it a universal variable from a useState() managed from the Settings subpage.
      color: "bg-green-800", // TODO: Make a color picker for the PlateForm element and insert the choice on each object.
    },
    {
      weight: 25,
      units: 13,
      massUnit: "Kg", // TODO: Remove this property from the objects and make it a universal variable from a useState() managed from the Settings subpage.
      color: "bg-blue-800", // TODO: Make a color picker for the PlateForm element and insert the choice on each object.
    },
    {
      weight: 25,
      units: 13,
      massUnit: "Kg", // TODO: Remove this property from the objects and make it a universal variable from a useState() managed from the Settings subpage.
      color: "bg-yellow-600", // TODO: Make a color picker for the PlateForm element and insert the choice on each object.
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black">
      <Header title="Equipment" />
      {/* TODO: Start making the main pages for the app */}
      <main className="mt-4 flex w-full flex-col items-center gap-4 pb-24 pt-20 md:pb-32 md:pt-24 lg:pb-36">
        <div className="flex flex-col items-center gap-2 pt-4 text-white">
          <h2 className="text-3xl font-semibold">Available Plates</h2>
          <p className="text-base">( Tap plates to edit )</p>
        </div>
        <div className="grid w-full grid-cols-3 place-content-center justify-items-center gap-2 gap-y-5 p-4 text-white md:w-11/12 md:gap-3 md:gap-y-6 xl:w-8/12">
          {/*
          When the gap of the buttons collapses the sizes break, so i have to adjust properties if the screen is too small.
          Be careful with the padding of the parent element to not collapse too.
          */}
          {AvailablePlates.map((plate, index) => (
            <PlateEquipment
              key={index}
              weight={plate.weight}
              units={plate.units}
              massUnit={plate.massUnit}
              color={plate.color}
            />
          ))}
          <PlateEquipment
            weight={25}
            units={13}
            massUnit="Kg"
            color="bg-violet-800"
          />
        </div>
      </main>
    </div>
  );
};

export default Equipment;
