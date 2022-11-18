import { galleryItems } from './gallery-items.js';
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems 
// і наданого шаблону елемента галереї.
const galleryContanier = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(items);

galleryContanier.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(items) {
    return items
        .map(({preview, original, description}) => {
        return '
    
            < div class="gallery__item" >
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a> </div>
            ';
    }

    ).join('')
}

// Реалізація делегування на div.gallery і отримання url великого зображення.

galleryContanier.addEventListener('click', onGalleryContanierClick)

function onGalleryContanierClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
}