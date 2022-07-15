import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";

import Navigation from "./Navigation";



function App() {

  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div >
  );
}

export default App;
