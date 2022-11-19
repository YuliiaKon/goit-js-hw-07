import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContanier = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContanier.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__link"
                href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>`;
        }
        ).join('');
}

galleryContanier.addEventListener('click', onGalleryContanierClick)

function onGalleryContanierClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">`);
instance.show();

divRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
        instance.close();
    }
});
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });


console.log(galleryItems);
