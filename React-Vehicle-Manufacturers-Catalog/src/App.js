import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vehcile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
