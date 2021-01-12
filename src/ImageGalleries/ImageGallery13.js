import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery13() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1484.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1485.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1486.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1487.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery13;