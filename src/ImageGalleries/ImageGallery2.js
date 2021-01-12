import React from 'react';
import { render } from "react-dom";

require('./imageGallery.css');


function ImageGallery2() {
 return (
<div class="slideshow-container">

<div class="gallery">
    <img  src="/Screenshot_1441.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1442.png"  />
</div>

<div class="gallery">
    <img  src="/Screenshot_1443.png"  />
</div>

<div class="gallery">
    <img   src="/Screenshot_1444.png"  />
</div>

</div>

         );
}

const container = document.createElement('div');
document.body.appendChild(container);

export default ImageGallery2;