import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery6() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1457.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1458.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1460.png"  />
</div>

<div class="gallery">
    <img   src="/i30n_black_interior.jpg"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery6;