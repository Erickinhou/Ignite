import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/game/:id"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
