import {React , useState , useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/features/Header/Header'
import Container from './components/Pages/Home/Container'
import Footer from './components/features/Footer/Footer'
import CarouselOne from './components/features/Cards/CarouselOne';
import MainPageText from './components/features/MainPageText'


function App() {
  const styleObj ={color:"white"}
  
  return (
    <div className="App">
      <header className="header_web">
        <Header />
        
      </header>
      
      <section id="containerBody">
        
        <CarouselOne/>
        <h2 style={styleObj}>Over 1,000 Classic Movies for your pleasure!</h2>
        
        
        <MainPageText/>
        
        
        
        <aside></aside>
      </section>
      <footer className="footer_web">
        <Footer/>
        
      </footer>
      
    </div>
  );
}

export default App;
