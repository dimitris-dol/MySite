import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery8() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1465.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1466.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1467.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1468.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery8;