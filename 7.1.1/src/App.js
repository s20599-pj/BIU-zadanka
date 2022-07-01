import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Error from "./components/error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/about"} exact element={<About />}></Route>
          <Route path={"/services"} exact element={<Services />} />
          <Route path={"/contact"} exact element={<Contact />} />
          <Route path={"/contact/:language"} exact element={<Contact />} />
          <Route path={"*"} exact element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;