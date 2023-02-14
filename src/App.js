import './App.css';

// components
import Nav from './components/Nav/index'
import Hero from './components/Hero/index'
import Description from './components/Description/index';
import Work from './components/Work/index';
import Overview from './components/Overview/index';
import Testimonials from './components/Testimonials/index';
import Footer from './components/Footer/index';

function App() {

  return (
    <div className="main">
      <Nav />
      <Hero />
      <Description />
      <Work />
      <Overview />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
