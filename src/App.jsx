import Calculator from "./pages/Calculator";
import Equipment from "./pages/Equipment";
import Graphs from "./pages/Graphs";
import NotFoundSection from "./pages/NotFoundSection";
import Settings from "./pages/Settings";
import Timer from "./pages/Timer";

const App = () => {
  return (
    <div>
      <Calculator />
      <Equipment />
      <Graphs />
      <NotFoundSection />
      <Settings />
      <Timer />
    </div>
  );
};

export default App;
