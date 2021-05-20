import {React } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/features/Header/Header'
import Container from './components/Pages/Home/Container'
import Footer from './components/features/Footer/Footer'
import CarouselOne from './components/features/Cards/CarouselOne';


function App() {
  // const loaderGIF = <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt="hello" className="loader" />;
  // const movieCards = <CarouselOne/>
  // const bodyContainer = <Container/>
  // const [cards,setCards] = useState(movieCards)
  // function changeSubject(){
  //   let show = false;
  //   if (show == false){
  //     show = true;
  //     setCards(bodyContainer);
      
  //   }
  //   else {
  //     show = false;
  //      setCards(movieCards);
       
  //   }  
  // }

 
  return (
    <div className="App">
      <header className="header_web">
        <Header />
        
      </header>
      
      <section id="containerBody">
        
        <CarouselOne/>
        <Container/>
        {/* {loaderGIF}
        {cards} */}
        {/* <button>Test</button> */}
        <aside></aside>
      </section>
      <footer className="footer_web">
        <Footer/>
        
      </footer>
      
    </div>
  );
}

export default App;
