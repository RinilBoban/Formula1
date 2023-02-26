import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Raceschedule from './components/Raceschedule';
import Standings from './components/Standings';
import Merchandise from './components/Merchandise';
import BookTickets from './components/BookTickets';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='raceschedules' element={<Raceschedule/>}/>
          <Route path='standings' element={<Standings/>}/>
          <Route path='merchandise' element={<Merchandise/>}/>
          <Route path='bookTickets' element={<BookTickets/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
