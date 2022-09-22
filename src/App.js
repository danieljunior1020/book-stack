import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotels/Hotel";
import Place from "./pages/places/Place";

function App() {
  return (
    <div>
       <Router>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/hotel" element={<Hotel />} />
             <Route path="/place/:id" element={<Place />} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
