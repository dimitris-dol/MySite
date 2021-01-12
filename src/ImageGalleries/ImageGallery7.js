import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery7() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1461.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1462.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1463.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1464.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery7;