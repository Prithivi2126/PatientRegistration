import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './componet/Create';
import Edit from './componet/Edit';
import List from './componet/List';
import Layout from './componet/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='patient/create' element={<Create />}></Route>
        <Route path="patient/list" element={<List />}></Route>
        <Route path="patient/edit" element={<Edit />}></Route>
        <Route path='patient/edit/:id' element={<Edit />}></Route>
        </Route>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
