import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
const imageItem = createGalleryImages(galleryItems);

galleryList.insertAdjacentHTML('beforeend', imageItem);


function createGalleryImages (galleryItems) {
   return galleryItems.map( ({ preview, original, description }) => {
      return `
         <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
   })
   .join('');
}

console.log(createGalleryImages (galleryItems));


