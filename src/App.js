import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MissingList } from "./components/MissingList/MissingList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MissingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
