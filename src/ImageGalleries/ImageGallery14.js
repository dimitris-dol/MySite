import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery14() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/my-app/Screenshot_1489.png"  />
</div>

<div class="gallery">
    <img  src="/my-app/Screenshot_1490.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1491.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1492.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery14;