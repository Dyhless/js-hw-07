import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from '../simplelightbox';  ?????

const galleryList = document.querySelector('.gallery');
const imageItem = createGalleryImages(galleryItems);
const images = galleryList.querySelectorAll('.gallery__image');

images.forEach((image) => {
  const link = image.parentNode;
  link.setAttribute('data-lightbox', '');
});

// функция для создания разметки
function createGalleryImages(galleryItems) {
  return galleryItems
    .map(({ preview, description }) => {
      return `
          <li class="gallery__item">
            <a class="gallery__link" href="${preview}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
          </li>
        `;
    })
    .join('');
}


galleryList.insertAdjacentHTML('beforeend', imageItem);

// инициализируем библиотеку
new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


