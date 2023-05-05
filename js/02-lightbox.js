import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imageItem = createGalleryImages(galleryItems);

//Создание и рендер разметки по массиву данных galleryItems
function createGalleryImages (galleryItems) {
   return galleryItems.map( ({ preview, description }) => {
      return `
         <li class="gallery__item">
        <a
          class="gallery__link"
          href="#"
        >
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
      `;
   })
   .join('');
}

// Элементы галереи созданы и добавлены в ul.gallery
galleryList.insertAdjacentHTML('beforeend', imageItem);

