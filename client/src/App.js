import React, {useState, useEffect} from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Projects from './components/Projects';

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <>
      <Header />
      <main>
        <Resume />
        <Projects projects={projects}  />
      </main>
      <Footer  />
    </>
  );
}

export default App;
