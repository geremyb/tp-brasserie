import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Accueil from './pages/Accueil';
import ListePagine from './pages/ListePagine';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element = {<Accueil/>}/>
          <Route path='/ListePagine' exact element = {<ListePagine/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
