import Boxes from "./components/Boxes";
import DemoCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MostanadBox from "./components/MostanadBox";
import RowMenu from "./components/RowMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <RowMenu />
      <DemoCarousel />
      <Boxes />
      <div className="mostanad-div">
        <MostanadBox />
        <MostanadBox />
        <MostanadBox />
        <MostanadBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
