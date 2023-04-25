import Greeting from "./components/greeting/Greeting";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Camera from "./components/camera/Camera";
import Offers from "./components/offers/Offers";
import Reviews from "./components/reviews/Reviews";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Greeting />
      <Camera />
      <Offers />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
