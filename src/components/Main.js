// console.log('Main.js');
// setTimeout(() => {
//     console.log('Main.js: setTimeout');
// }, 5000);

// // debugger; 

import React from 'react';
import '../Main.css';

function Main() {
  return (
    <div className='container'>
        <header>
            <div className='header-container'>
                <nav>
                    <div id='logo'>
                        <h1>Shortly</h1>
                    </div>

                    <div className='list'>
                        <a href='#'>Features</a>
                        <a href='#'>Pricing</a>
                        <a href='#'>Resources</a>
                    </div>
                    <div className='login'>
                        <a href='#'>Login</a>
                        <a href='#' id='sign-up'>Sign Up</a>
                    </div>
                </nav>
            </div>
        </header>
        
        <div className='more-than'>
            <div className='brand-promise'>
                <h1 id='tagline'>More than just <br/> shorter links</h1>
                <p id='tagline-2'>
                    Build your brand’s recognition and get detailed <br/> 
                    insights on how your links are performing.
                </p>
            </div>
            <button id='get-started'>Get Started</button>           
        </div>

        

    </div>
  )
}

export default Main