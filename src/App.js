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
            <Route path='/' element= {
              <div className=''>
                <div><img src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1584,c_limit/d55e7bb4-38ba-40dc-abb1-5b527e3c8528/marca-jordan.png'/></div>
                

              </div>
            }></Route>
            <Route path='/men' element= {<div>Men</div>}></Route>
            <Route path='/women' element= {<div>Women</div>}></Route>
            <Route path='/kids' element= {<div>Kids</div>}></Route>
            <Route path='/all' element= {<div>All</div>}></Route>
            <Route path='/cart' element= {<div>Cart</div>}></Route>
            <Route path='/user' element= {<div>User</div>}></Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
