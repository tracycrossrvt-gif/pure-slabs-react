import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Story />
        <Gallery />
        <Services />
        <Pricing />
        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}

export default App;