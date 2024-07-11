import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import HeaderSection from './Component/HeaderSection/HeaderSection';
import AboutMe from "./Component/AboutMe/AboutMe";
import Services from './Component/Services/Services';
import MyProjects from './Component/MyProjects/MyProjects'
import Contact from './Component/Contact/Contact';
import Testimonials from './Component/Testimonials/Testimonials';
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div className="App">

      <Header />
      <HeaderSection />
      <AboutMe />
      <Services />
      <MyProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
