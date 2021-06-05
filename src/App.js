import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
        <Header/>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
