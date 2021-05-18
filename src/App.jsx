import React from 'react'
import './App.css';
import ReactDOM from 'react-dom'
// import Input from './components/Pages/Register/Input'
import Header from './components/features/Header/Header'
import Container from './components/Pages/Home/Container'
import Footer from './components/features/Footer/Footer'
import Counter from './components/ran_bar_zik_practices/Counter'





// ============================================= //
// const items = [];
  // for(let i=0;i<9;i++){
  //   items.push(<li>{i}</li>)
  // }
  
// ============================================= //
// הכנסת אובייקט למערך והשמה בדפדפן
// const user = {
//     name: 'ran', lastName: 'Bar-Zik' , city:'Petah tikva' , id:'66'
//   }
//   const test = Object.keys(user).map((index,value)=>{
//     return <li >{user[index]}</li>
//   })
//   return (

function App() {
  
  return (
    <div className="App">
      <header className="header_web">
        <Header />
      </header>
      
      <section id="containerBody">
        <Container/>
        <Counter/>
        <aside></aside>
      </section>
      <footer className="footer_web">
        <Footer/>
        
      </footer>
      
    </div>
  );
}

export default App;
