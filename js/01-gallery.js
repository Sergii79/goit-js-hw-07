import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(_.add(4, 5));

const galleryBlock = document.querySelector(".gallery");
console.log(galleryBlock);



const showGalleryItems = galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"></img></li>`
    })
    .join("");

galleryBlock.insertAdjacentHTML("afterbegin", showGalleryItems);


galleryBlock.addEventListener("click", onBigImg);


// function onBigImg(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }
// }
// new SimpleLightbox(".gallery a");
