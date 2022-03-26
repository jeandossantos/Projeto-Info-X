import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Content from "./components/templates/Content";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App
