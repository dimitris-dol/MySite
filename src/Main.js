import React from 'react';
import { render } from "react-dom";
import Gallery from './Gallery';
import App from './App';
require('./index.css');

function Main() {
 return (
    <div class="main">
             <div class="header">
               <h1>Car Comparison</h1>
               <p>A webapp I created in order to get help about my car choice. Shows all important data alongside with an image gallery.</p>
             </div>

             <div class="row">
               <div class="leftcolumn">
                 <div class="card">
                   <App />
                 </div>
               </div>
               <div class="rightcolumn">
                 <div class="card">
                 <div class="centre">
                   <h2>Image Gallery</h2></div>
                   <Gallery />
                 </div>
               </div>
             </div>

             <div class="footer">
               <img class="footer_img" styles="height:100px;" src="/hdjune.png"  />
             </div>
</div>
         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default Main;