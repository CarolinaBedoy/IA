import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Question} from './components/question';
import {Result} from './components/result';
import Disorders from './components/disorders'

export const  App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Question/>}/>
      <Route path='/results' element={<Result/>}/>
      <Route path='/home' element={<Disorders/>}/>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;

