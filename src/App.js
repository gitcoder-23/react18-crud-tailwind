// import logo from './logo.svg';
import './App.css';
import Navmenu from './components/Navmenu';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ViewUser from './pages/View/ViewUser';
import AddUser from './pages/Add/AddUser';
import EditUser from './pages/Edit/EditUser';

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />

        <Route path="/view/user/:vid" element={<ViewUser />} />
        <Route path="/edit/user/:eid" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
