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

import SimpleLightbox from 'simplelightbox'; // импортируем библиотеку

const galleryLinks = galleryList.querySelectorAll('.gallery__link'); // получаем все ссылки в галерее

// проходимся по каждой ссылке и добавляем атрибуты
galleryLinks.forEach((link) => {
  link.setAttribute('data-slb-group', 'myGallery'); // группируем ссылки в одну галерею
  link.setAttribute('href', link.querySelector('.gallery__image').getAttribute('src')); // указываем путь к большому изображению
});

// инициализируем библиотеку
new SimpleLightbox('.gallery__link', {
  captions: true, // показываем подписи к изображениям
  captionsData: 'alt', // берем подписи из атрибута alt
  captionDelay: 250, // задержка перед появлением подписи
});
