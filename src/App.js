import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/Add-Book';
import Navbar from './Components/navbar/Navbar';
import BookInput from './Components/BookInput/BookInput';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<BookInput />} />
            </Routes>
        </Router>
    );
}

export default App;
