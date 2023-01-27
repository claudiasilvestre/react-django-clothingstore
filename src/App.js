import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home'
import Product from './components/Product'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products/:productId' element={<Product />} />
          <Route exact path='/account/login' element={<Login />} />
          <Route exact path='/account/register' element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
