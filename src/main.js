// У файлі main.js напиши всю логіку роботи додатка.
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {searchImagesByQuery} from "./js/pixabay-api";
import {renderSearchCollection} from "./js/render-functions";

const form = document.querySelector(".form");
const listImages = document.querySelector(".images");
const loading = document.querySelector(".loading");
const contLoader = document.querySelector(".loader-container");


form.addEventListener("submit", handleSuubmit);

function handleSuubmit(e) {
    e.preventDefault();
    listImages.innerHTML = " ";
    let searchInput = form.elements.search.value.trim();
    // console.log(searchInput);
    if(searchInput === "") {
        iziToast.error({
            title: ' ',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            titleSize: '16px',
            titleLineHeight: '24px',
            messageColor: 'white',
            messageSize: '16px',
            messageLineHeight: '24px',
            backgroundColor: '#ef4040',
            iconColor: '#ffffff',
            titleColor: '#ffffff',
            messageColor: '#ffffff',
            close: false,
            position: 'topRight',
        })
        return;
    }
    contLoader.style.display = "block";
    searchImagesByQuery(searchInput)
    .then((data) => {
        contLoader.style.display = "block";
        if(data.hits[0] === undefined) {
            contLoader.style.display = "none";
            iziToast.error({
                title: ' ',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                // iconUrl: errorIcon,
                titleSize: '16px',
                titleLineHeight: '24px',
                messageColor: 'white',
                messageSize: '16px',
                messageLineHeight: '24px',
                backgroundColor: '#ef4040',
                iconColor: '#ffffff',
                titleColor: '#ffffff',
                messageColor: '#ffffff',
                close: false,
                position: 'topRight',
            })
            return;
        }


        renderSearchCollection(listImages, data.hits);
        contLoader.style.display = "none";

        listImages.addEventListener("click", handleClick);

        function handleClick(e) {
            e.preventDefault()
            if (e.target.nodeName !== 'IMG') return;
            const lightbox = new SimpleLightbox('.image-item a', { 
                captionsData: "alt",
             });
             lightbox .refresh();

        }

    })
    .catch((error) => {
        console.log(error)
    })
}


