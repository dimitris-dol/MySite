import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery12() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1480.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1481.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1482.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1483.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery12;