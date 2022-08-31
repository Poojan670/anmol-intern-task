import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question2 from './pages/Question2';
import Question1 from './pages/Question1';
import Question3 from './pages/Question3';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<Question1 />} />
        <Route path='/2' element={<Question2 />} />
        <Route path='/3' element={<Question3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
