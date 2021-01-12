import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery1() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1437.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1438.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1439.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1440.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery1;