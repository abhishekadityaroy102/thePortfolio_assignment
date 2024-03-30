import logo from "./logo.svg";
import "./App.css";
import { ContextProvider } from "./ContextApi/Contextapi";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="App">
          <Dashboard />
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
