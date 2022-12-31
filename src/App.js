import { Route, Routes } from 'react-router-dom';
import './App.css';
import Event from './Component/Event/Event';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Update from './Component/Update/Update';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='/event' element={<Event></Event>}></Route>
      </Routes>
    </div>
  )
}

export default App;
