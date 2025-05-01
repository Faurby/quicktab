// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NewMenu from "./pages/NewMenu";
import LoadMenu from "./pages/LoadMenu";
import QRCode from "./pages/QRCode";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewMenu />} />
          <Route path="load" element={<LoadMenu />} />
          <Route path="qr" element={<QRCode />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
