import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// console.log(_.add(4, 5));

const galleryBlock = document.querySelector(".gallery");
// console.log(galleryBlock);



const showGalleryItems = galleryItems
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}">
        </img></li>`
    })
    .join("");

galleryBlock.insertAdjacentHTML("afterbegin", showGalleryItems);


// galleryBlock.addEventListener("click", onBigImg);

// const basicLightbox = require('basiclightbox')
// import * as basicLightbox from 'basiclightbox'

// function onClick(event) {
//     event.preventDefault();
//     const imgs = event.target.classList.contains("gallery");
//     if (!imgs) {
//         return;
//     }
// }

// function onModal({
//     const instance = basicLightbox.create(
//         `<img src="${original}",
//         {
//             onShow: (instance) => {
//                 galleryBlock.add
//             }
//         }`)
    
// })

// function onClick(evt){
//     if (evt.target.nodeName !== `IMG`){
//         return;
//     }
//         const instance = basicLightbox.create(`
//         <img src="${evt.target.dataset.source}" width="800" height="600">
//         `)
//         instance.show();
// }
  



