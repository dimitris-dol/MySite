import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery9() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/my-app/Screenshot_1469.png"  />
</div>

<div class="gallery">
    <img  src="/my-app/Screenshot_1470.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1471.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/pd_nline_interior_stiching.jpg"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery9;