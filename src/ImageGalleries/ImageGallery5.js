import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery5() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1453.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1454.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1455.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1456.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery5;