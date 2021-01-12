import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery3() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1445.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1446.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1447.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1448.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery3;