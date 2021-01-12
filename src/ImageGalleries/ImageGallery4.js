import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery4() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/my-app/Screenshot_1449.png"  />
</div>

<div class="gallery">
    <img  src="/my-app/Screenshot_1450.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1451.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1452.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery4;