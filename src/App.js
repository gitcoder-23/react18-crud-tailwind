// import logo from './logo.svg';
import './App.css';
import Navmenu from './components/Navmenu';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ViewUser from './pages/View/ViewUser';

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/user/:vid" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
