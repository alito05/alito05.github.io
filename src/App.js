import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import { Fragment } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Routes>
            <Route path='/' element= {<div>HOME</div>}></Route>
            <Route path='/men' element= {<div>Men</div>}></Route>
            <Route path='/women' element= {<div>Women</div>}></Route>
            <Route path='/kids' element= {<div>Kids</div>}></Route>
            <Route path='/all' element= {<div>All</div>}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
