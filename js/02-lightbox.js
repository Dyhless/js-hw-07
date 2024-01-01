import { galleryItems } from './gallery-items.js';

// Находим элемент списка галереи
const galleryList = document.querySelector('.gallery'); 
// Создаём HTML код элементов галереи
const imageItem = createGalleryImages(galleryItems); 
// Находим все элементы изображений
const images = galleryList.querySelectorAll('.gallery__image'); 
// Проходим по каждому элементу изображения и добавляем атрибут для использования SimpleLightbox
images.forEach((image) => {
  // Находим родительский элемент ссылки
  const link = image.parentNode; 
  // Добавляем атрибут data-lightbox
  link.setAttribute('data-lightbox', ''); 
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
//   sourceAttr: href,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
