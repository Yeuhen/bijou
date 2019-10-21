import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
  
     <header>
       <div className="wrapper-header">
         <div className="container">
           <section className="section-header">
             <a href="/" className="logo"><img src="./data/backgroundWallpeper.jpg" alt="logo"/></a>
             <ul className="main-menu">
               <li className="main-menu__item">
                 <a href="/" className="main-menu__link">
                   <i className="main-menu__link-icon"></i>
                    <span className="main-menu__link-title">name</span>
                  </a>
               </li>
               <li className="main-menu__item">
                 <a href="/" className="main-menu__link">
                   <i className="main-menu__icon"></i>
                   <span className="main-menu__link-title">cart</span>
                 </a>
               </li>
               <li className="main-menu__item">
                 <a href="/" className="main-menu__item">
                   <i className="mein-menu__icon"></i>
                   <span className="main-menu__link-title">wishes</span>
                 </a>
               </li>
             </ul>
             <ul className="info-menu">
               <li className="info-menu__item">
                 <a href="/" className="info-menu__item">
                   <i className="info-menu__icon"></i>
                   <span className="info-menu__title">contacts</span>
                 </a>
               </li>
               <li className="info-menu__item">
                 <a href="/" className="info-menu__item">
                   <i className="info-menu__icon"></i>
                   <span className="info-menu__title">delivery/payment</span>
                 </a>               
               </li>
               <li className="info-menu__item">
                 <a href="/" className="info-menu__item">
                   <i className="info-menu__icon"></i>
                   <span className="info-menu__title">faq</span>
                 </a>                 
                </li>
             </ul>
           </section>
         </div>
       </div>
       <a href="" className="img"></a>

     </header>,
     <main>

     </main>,
     <footer>

     </footer>
  );
}

export default App;
