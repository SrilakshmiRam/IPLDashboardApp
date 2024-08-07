import { BrowserRouter,Route,Routes } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SpeificTeam from "./components/SpecificTeam";


const App=()=>(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path='/team/:id' element={<SpeificTeam/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App