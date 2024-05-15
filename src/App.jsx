import Header from "./components/Header";
import ToDo from "./components/ToDo";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <ToDo />
      <Footer />
    </div>
  );
}

export default App;
