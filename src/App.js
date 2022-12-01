import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WantedList from './components/WantedList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wantedList" element={<WantedList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
