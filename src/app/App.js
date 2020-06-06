import React from 'react';

import Header from '../components/Header/Header.js';
import Body from '../components/Body/Body.js';
import Footer from '../components/Footer/Footer.js';
//import './assets/css/stylesheet.css';
import './App.css';




const App = () => {
  
  return (
    <div className="App">
        <Header/>
        <Body/>
        <Footer
          name={'Виталий Ерёменко'}
        />
        

    </div>
  )
}

export default App;


