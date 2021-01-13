import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery15() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img   src="/my-app/Screenshot_1500.png"  />
</div>

<div class="gallery">
    <img  src="/my-app/Screenshot_1501.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1502.png"  />
</div>

<div class="gallery">
    <img   src="/my-app/Screenshot_1503.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery15;