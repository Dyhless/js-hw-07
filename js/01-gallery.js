import { galleryItems } from './gallery-items.js';

// Получаем ссылку на контейнер галереи
const galleryList = document.querySelector('.gallery');

// Создаем разметку с изображениями галереи на основе массива galleryItems
const imageItem = createGalleryImages(galleryItems);

// Функция для создания элементов галереи
function createGalleryImages (galleryItems) {
   return galleryItems.map( ({ preview, original, description }) => {
      return `
         <li class="gallery__item">
            <a class="gallery__link" href="#">
               <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
         </li>
      `;
   }).join('');
}

// Добавляем разметку с изображениями в контейнер галереи
galleryList.insertAdjacentHTML('beforeend', imageItem);

// Добавляем слушатель на клик по изображению галереи
galleryList.addEventListener('click', onGalleryItem);

// Обработчик клика по изображению галереи
function onGalleryItem(evt) {
   evt.preventDefault();

   // Получаем ссылку на элемент, по которому кликнули
   const clickElement = event.target;

   // Проверяем, что кликнули именно по изображению
   const isImage = clickElement.tagName === 'IMG';

   if (!isImage) {
      return;
   }

   // Получаем ссылку на оригинальное изображение
   const originalUrl = clickElement.dataset.source;

   // Создаем модальное окно с оригинальным изображением
   const modal = basicLightbox.create(`
      <div class="modal">
         <img src="${originalUrl}" alt="">
      </div>
   `);

   // Получаем ссылку на изображение внутри модального окна
   const img = modal.element().querySelector('img');

   // Устанавливаем источник изображения в соответствии с оригинальным изображением
   img.src = originalUrl;

   // Отображаем модальное окно
   modal.show();

   // Выводим ссылку на оригинальное изображение в консоль
   console.log(originalUrl);

   // Добавляем слушатель на закрытие модального окна по нажатию клавиши Esc
   document.addEventListener('keydown', onModalKeyDown);

   // Обработчик нажатия клавиши Esc при открытом модальном окне
   function onModalKeyDown(evt) {
      if (evt.code === 'Escape') {
         // Закрываем модальное окно
         modal.close();

         // Удаляем обработчик нажатия клавиши Esc после закрытия модального окна
         document.removeEventListener('keydown', onModalKeyDown);
      }
   }
}
