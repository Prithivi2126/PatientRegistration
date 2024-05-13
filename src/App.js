import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './componet/Create';
import Edit from './componet/Edit';
import List from './componet/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
