import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (

<div className="App">
      <header className="App-header">

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/detail' element={<Detail />}/>
      <Route path='*' element={"Page Not Found"}/>
    </Routes>
    </BrowserRouter>
    
       </header>
    </div>
  );
}

export default App;
