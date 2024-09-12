// У файлі pixabay-api.js зберігай функції для HTTP-запитів.
// import {searchInput} from "../main.js";
// console.log(searchInput);


export function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY ="45940755-86be6da0f1a4750ab3bd13574";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${URL}?${params}`).then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}

