import React from 'react'
import './App.css';
import HomeJacob from './components/Pages/Home/HomeJacob'

/* צרו אפליקציית ריאקט של משתמשים
צרו קומפננטות של : Header, Footer, Home, User-card -1
לכל משתמש יש שדות של שם פרטי, שם משפחה וגיל - 2 
הציגו 5 כרטיסיות עם מידע שונה. - 3
לאחר שהצלחנו, נציג כל כרטיסיה בעיצוב אחר, לא משנה העיצוב המדוייק. - 4
לאחר מכן, נציג משתמשים מעל גיל 28 בצבע כחול ומתחת בצבע ירוק. - 5
*/

function App() {
 
  
  return (
    <div className="App">
      <HomeJacob/>
      
    </div>
  );
}

export default App;
