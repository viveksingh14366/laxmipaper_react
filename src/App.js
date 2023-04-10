import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ClienteleSection from './components/ClienteleSection';
import ManagementSection from './components/ManagementSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import Blog from './components/Blog';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    Aos.init({
      disable: function() {
        var Width = 1024;
        return window.innerWidth < Width;
      }
    })
  }, []);
  
  return (
    <div>
      <Header title="Laxmi Paper" ContactBtn={true} MoreBtn={false}/>
      <BannerSection />
      <AboutSection title="About Us"/>
      <ProductsSection title="Products" />
      <ClienteleSection title="Clientele" />
      <ManagementSection title="Management" />
      <ContactSection title="Contact" />
      {/* <Blog /> */}
      <FooterSection />
    </div>
  );
}

export default App;
