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
          href="#"
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

// console.log(createGalleryImages(galleryItems));

galleryList.addEventListener('click', onGalleryItem);

function onGalleryItem(evt) {
   evt.preventDefault();
   
   const clickElement = event.target;
   const isImage = clickElement.tagName === 'IMG';

   if (!isImage) {
      return;
   }

  const originalUrl = clickElement.dataset.source;
  
  const modal = basicLightbox.create(`
    <div class="modal">
      <img src="${originalUrl}" alt="">
    </div>
  `);

  const img = modal.element().querySelector('img');
  img.src = originalUrl;

  modal.show();
}
