import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import { Hotel } from "./pages/hotel/Hotel";
import { Navbar } from "./Components/navbar/Navbar";
import { Login } from "./pages/login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
