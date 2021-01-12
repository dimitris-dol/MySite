import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery11() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1476.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1477.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1478.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1479.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery11;