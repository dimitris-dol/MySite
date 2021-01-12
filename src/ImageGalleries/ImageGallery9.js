import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery9() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/Screenshot_1469.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1470.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1471.png"  />
</div>

<div class="gallery">
    <img   src="/pd_nline_interior_stiching.jpg"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery9;