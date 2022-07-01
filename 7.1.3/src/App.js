import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Add from "./components/add";
import Substract from "./components/sub";
import Multiply from "./components/mul";
import Divide from "./components/div";
import Error from "./components/error";

function App() {
  return (
   <BrowserRouter>
     <Routes>
       <Route>
         <Route path={"/add/:a/:b"} exact element={<Add />} />
         <Route path={"/sub/:a/:b"} exact element={<Substract />} />
         <Route path={"/mul/:a/:b"} exact element={<Multiply />} />
         <Route path={"/div/:a/:b"} exact element={<Divide />} />
         <Route path={"*"} exact element={<Error />} />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
