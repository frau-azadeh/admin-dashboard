import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
    </div>
  );
}

export default App;
