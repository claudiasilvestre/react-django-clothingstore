import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home'
import Product from './components/Product'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/Profile'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products/:productId' element={<Product />} />
          <Route exact path='/account/login' element={!localStorage.getItem('access') ? <Login /> : <Navigate replace to={"/account/profile"} />} />
          <Route exact path='/account/register' element={<Register />} />
          <Route exact path='/account/profile' element={localStorage.getItem('access') ? <Profile /> : <Navigate replace to={"/account/login"} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
