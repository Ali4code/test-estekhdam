import DemoCarousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import RowMenu from './components/RowMenu';


function App() {
  return (
    <div className="App">
     <Header/>
     <RowMenu/>
     {/* <div className='carousel-size'><DemoCarousel/></div> */}
     <Footer/>
    </div>
  );
}

export default App;
