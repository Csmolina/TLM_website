import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { MyRoutes } from "./routers/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { Hamburguer } from "./components/Hamburguer";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hamburguer />
        <Header />
        <MyRoutes />
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
