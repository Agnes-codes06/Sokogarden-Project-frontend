import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';





function App() {
  return (

    <Router>

    <div className="App">
      <header className="App-header">

<h1 className="text-warning">Sokogarden buy and sell online</h1>

      </header>
    

    <nav>
      <Link to="/" className="text-warning m-3 btn btn-outline-dark">Get Product details</Link>
      <Link to='addproducts' className="text-warning m-3 btn btn-outline-dark">AddProducts</Link>
      <Link to='signin' className="text-warning m-3 btn btn-outline-dark">SignIn</Link>
      <Link to='signup' className="text-warning m-3 btn btn-outline-dark">SignUp</Link>

    </nav>

    <Routes>

      <Route path="/addproducts" element={<AddProducts/>}/>
      <Route path='/' element={<GetProducts/>}/>
      <Route path='/mpesa' element={<Mpesa/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>




    </Routes>


    </div>

    </Router>

      
  
    
  );
}

export default App;
