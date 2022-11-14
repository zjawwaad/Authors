import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import './App.css';
import AllAuthors from "./components/AllAuthors";
import Display from "./components/Display";
import Add from "./components/Add";
import Edit from "./components/Edit";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <AllAuthors/> } />
        <Route path="/author/:id" element={ <Display/> } />
        <Route path="author/add" element={ <Add/> } />
        <Route path="author/edit/:id" element={ <Edit/> } />
      </Routes>
    </div>
  );
}

export default App;
