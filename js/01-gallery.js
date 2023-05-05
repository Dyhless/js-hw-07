import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
const imageItem = createGalleryImages(galleryItems);

//Создание и рендер разметки по массиву данных galleryItems
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

// Элементы галереи созданы и добавлены в ul.gallery
galleryList.insertAdjacentHTML('beforeend', imageItem);

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
  console.log(originalUrl);
  
// Добавляем слушатель на закрытие модалки на esc кнопку
  document.addEventListener('keydown', onModalKeyDown);

  function onModalKeyDown(evt) {
    if (evt.code === 'Escape') {
      modal.close();

      // удаляем слушатель после того как модалка закрыватся
      document.removeEventListener('keydown', onModalKeyDown);
    }
  }
}




