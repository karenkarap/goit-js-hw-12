import{a as p,S as m,i as n}from"./assets/vendor-CLAh-PDR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=o=>p.get("https://pixabay.com/api/",{params:{key:"51377392-58695daed08c65a7357b6e761",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data),l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")},g=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),f=o=>{const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:c,downloads:d})=>`
        <li class="gallery-item">
            <div class="card"> 
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${a}" alt="${e}" />
                </a>
                <div class="info">
                    <div class="info-row labels">
                        <p>Likes</p>
                        <p>Views</p>
                        <p>Comments</p>
                        <p>Downloads</p>
                    </div>
                    <div class="info-row values">
                        <p>${t}</p>
                        <p>${i}</p>
                        <p>${c}</p>
                        <p>${d}</p>
                    </div>
                </div>
            </div>
        </li>
            `).join("");l.gallery.innerHTML=r,g.refresh()},y=()=>{l.gallery.innerHTML=""},h=()=>{l.loader.classList.remove("is-hidden")},L=()=>{l.loader.classList.add("is-hidden")},v={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")},b=o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Search field cannot be empty.",position:"topRight"});return}y(),h(),u(r).then(a=>{const s=a.hits;s.length===0&&n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f(s)}).catch(a=>{console.error("Error:",a),n.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}).finally(()=>{L()})};v.form.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
