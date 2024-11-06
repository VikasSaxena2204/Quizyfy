import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReviewAnswer from './pages/Review/ReviewAnswer';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <QuizState>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<ReviewAnswer />} />
        </Routes>
        <Footer />
      </div>
    </QuizState>
  );
}

export default App;
