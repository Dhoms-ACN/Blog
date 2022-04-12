import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <>
      <Header />
        <AppRouter />
      <Footer />
    </>
  );
}

export default App;
