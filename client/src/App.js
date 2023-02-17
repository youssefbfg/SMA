
import './App.css';
import Posts from "./components/Posts"
import {Routes,Route,Link} from "react-router-dom"
import { Button } from "reactstrap";
import Home from './components/Home';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/list" element={<Posts/>} />
    <Route  path="/add-Post" element={<AddForm/>}/>
   </Routes>

    </div>
  );
}

export default App;
