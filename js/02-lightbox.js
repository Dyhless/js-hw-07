import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery'); // Находим элемент списка галереи
const imageItem = createGalleryImages(galleryItems); // Создаём HTML код элементов галереи

const images = galleryList.querySelectorAll('.gallery__image'); // Находим все элементы изображений

// Проходим по каждому элементу изображения и добавляем атрибут для использования SimpleLightbox
images.forEach((image) => {
  const link = image.parentNode; // Находим родительский элемент ссылки
  link.setAttribute('data-lightbox', ''); // Добавляем атрибут data-lightbox
});

// Создаём HTML код элементов галереи
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

// Вставляем элементы галереи на страницу
galleryList.insertAdjacentHTML('beforeend', imageItem);

// Инициализируем SimpleLightbox с настройками
new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
