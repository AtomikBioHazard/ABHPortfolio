import React, {useState, useEffect} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';
import NavLinks from './components/NavLinks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <NavLinks  />
        <Routes>
          <Route path='/' element={<Resume  />} />
          <Route path='/projects' element={<Projects projects={projects}  />} />
        </Routes>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
