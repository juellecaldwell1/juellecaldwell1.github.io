import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Banner from "./Components/Banner.jsx";
import Work from "./Components/Work.jsx";
import Services from "./Components/Services.jsx";
import Header from "./Components/Header.jsx";
import Contact from "./Components/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import Fourofour from "./Components/otherPages/404.jsx";
import EmailForm from "./Components/otherPages/emailMe.jsx";
import Modal from "./Components/otherPages/modal.jsx";
import Resume from "./Components/otherPages/resume.jsx";
function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Navbar />
        
      <Routes>
        <Route path="/" element={<div>
          <Header />
          <Banner />
          <About />
          <Services />
          <Work />
          <Contact />
        </div>}>
        </Route>
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Fourofour />} />
      </Routes>

      {/* <div className='h-[4000px]'></div>  */}
    </div>
  );
}

export default App;
