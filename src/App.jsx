import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Page from "./components/page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
    <Header>
      <Nav currentPage={currentPage} />
    </Header>
    <main>
      <Page currentPage={currentPage} />
    </main>
    <Footer />
  </div>
);
}

export default App;
