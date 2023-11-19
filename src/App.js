import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Menu/>
      <Projects/>

    </div>
  );
}

export default App;