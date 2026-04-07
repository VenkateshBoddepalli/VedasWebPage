import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ExploreMenu from "./Components/ExploreMenu";
import WatchVideo from "./Components/WatchVideo";
import NotFound from "./Components/NotFound";
import DiscoverStory from "./Components/DiscoverStory"
import OrderNow from "./Components/OrderNow";
import CheckOut from "./Components/CheckOut";
import MessCard from "./Components/MessCard";

function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/contact" element={<Contact />}/>

     <Route path="/testimonial" element={<Testimonial />}/>
     <Route path="/icon" element={<Work />}/>
     <Route path="/ordernow" element={ <OrderNow />}/>
     <Route path="/footer" element={<Footer />}/>


     <Route path="/discoverStory" element={ <DiscoverStory />}/>
     <Route path="/watchVideo" element={ <WatchVideo />}/>
     <Route path="/exploreMenu" element={ <ExploreMenu />}/>
     <Route path="/checkout" element={ <CheckOut />}/>
     <Route path="/messcard" element={ <MessCard />}/>
     <Route path="*" element={ <NotFound />}/>
     </Routes>
    </div>
  );
}

export default App;

// import React from "react";
// import Text from "./text.js"

// function App() {
//   return(
//     <>
//       <Text />
//     </>
//   );
// };
// export default App;