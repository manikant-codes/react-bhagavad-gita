import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";
import Layout from "./layouts/Layout";
import Verse from "./pages/Verse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chapter/:number" element={<Chapter />} />
          <Route
            path="/chapter/:number/verse/:verseNumber"
            element={<Verse />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
