import { useState } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/AboutUs";
import Services from "./sections/Services";
import Events from "./sections/Events";
import Testimony from "./sections/Testimony";
import Gallery from "./sections/PhotoGallery";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Events />
      <Testimony />
      <Gallery />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
