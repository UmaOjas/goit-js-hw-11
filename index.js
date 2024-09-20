import{i as f,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function y(s){const r="https://pixabay.com/api/",o="45940755-86be6da0f1a4750ab3bd13574",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function b(s,r){function o({webformatURL:t,largeImageURL:n,tags:u,likes:m,views:d,comments:h,downloads:g}){return`<li class="image-item">
        <a href="${n}">
        <img
        class="search-image"
        src="${t}"
        alt="${u}" />
        <table class="image-table">
            <tr>
                <th>Likes</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Downloads</th>
            </tr>
            <tr>
                <td>${m}</td>
                <td>${d}</td>
                <td>${h}</td>
                <td>${g}</td>
            </tr>
        </table>
        </a>
        </li>`}function i(t){return t.map(o).join("")}const e=i(r);s.insertAdjacentHTML("beforeend",e)}const c=document.querySelector(".form"),l=document.querySelector(".images");document.querySelector(".loading");const a=document.querySelector(".loader-container");c.addEventListener("submit",L);function L(s){s.preventDefault(),l.innerHTML=" ";let r=c.elements.search.value.trim();if(r===""){f.error({title:" ",message:"Sorry, there are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"24px",messageColor:"white",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#ef4040",iconColor:"#ffffff",titleColor:"#ffffff",messageColor:"#ffffff",close:!1,position:"topRight"});return}a.style.display="block",y(r).then(o=>{if(a.style.display="block",o.hits[0]===void 0){a.style.display="none",f.error({title:" ",message:"Sorry, there are no images matching your search query. Please try again!",titleSize:"16px",titleLineHeight:"24px",messageColor:"white",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#ef4040",iconColor:"#ffffff",titleColor:"#ffffff",messageColor:"#ffffff",close:!1,position:"topRight"});return}b(l,o.hits),a.style.display="none",l.addEventListener("click",i);function i(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;new p(".image-item a",{captionsData:"alt"}).refresh()}c.reset()}).catch(o=>{console.log(o),a.style.display="none"})}
//# sourceMappingURL=index.js.map
