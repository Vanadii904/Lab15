import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles.css';
import './normalize.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Head />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;