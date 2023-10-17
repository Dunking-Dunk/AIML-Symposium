import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './pages/Home.jsx'
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="app">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
