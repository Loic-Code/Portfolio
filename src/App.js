import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './assets/views/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
