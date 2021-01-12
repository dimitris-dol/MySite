import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery10() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1472.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1473.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1474.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1475.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery10;