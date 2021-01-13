import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery16() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/my-app/Screenshot_1496.png"  />
</div>

<div class="gallery">
    <img  src="/my-app/Screenshot_1497.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1498.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1499.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery16;