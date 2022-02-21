import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
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
