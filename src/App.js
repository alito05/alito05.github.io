import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import { Fragment } from 'react';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <NavBar/>
        <Routes>
            <Route path='/' element= {<Home/>}></Route>
            <Route path='/men' element= {
              <div>
                Men
              </div>
            }></Route>
            <Route path='/women' element= {<div>Women</div>}></Route>
            <Route path='/kids' element= {<div>Kids</div>}></Route>
            <Route path='/all' element= {<div>All</div>}></Route>
            <Route path='/all/:id' element= {<div>HOLIS</div>}></Route>
            <Route path='/cart' element= {<div>Cart</div>}></Route>
            <Route path='/user' element= {<div>User</div>}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
