import{a as q,S as E,i as c}from"./assets/vendor-B7yatFIi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function y(s,t,r){return(await q.get("https://pixabay.com/api/",{params:{key:"51377392-58695daed08c65a7357b6e761",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:t}})).data}const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader"),button:document.querySelector(".js-button-more")},P=new E(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}),h=s=>{const t=s.map(({webformatURL:r,largeImageURL:a,tags:e,likes:o,views:l,comments:w,downloads:S})=>`
        <li class="gallery-item">
            <div class="card"> 
                <a class="gallery-link" href="${a}">
                    <img class="gallery-image" src="${r}" alt="${e}" />
                </a>
                <div class="info">
                    <div class="info-row labels">
                        <p>Likes</p>
                        <p>Views</p>
                        <p>Comments</p>
                        <p>Downloads</p>
                    </div>
                    <div class="info-row values">
                        <p>${o}</p>
                        <p>${l}</p>
                        <p>${w}</p>
                        <p>${S}</p>
                    </div>
                </div>
            </div>
        </li>
            `).join("");n.gallery.insertAdjacentHTML("beforeend",t),P.refresh()},R=()=>{n.gallery.innerHTML=""},b=()=>{n.loader.classList.remove("is-hidden")},v=()=>{n.loader.classList.add("is-hidden")},L=()=>{n.button.classList.remove("is-hidden")},m=()=>{n.button.classList.add("is-hidden")},p={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),button:document.querySelector(".js-button-more")};let i=1;const g=15;let d=null,u=null;const f=async s=>{i+=1,b();try{const r=(await y(u,i,g)).hits;h(r);const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2+16,behavior:"smooth"}),i>=d?(m(),c.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),p.button.removeEventListener("click",f)):L()}catch(t){console.log(t)}finally{v()}},$=async s=>{if(s.preventDefault(),m(),p.button.removeEventListener("click",f),u=s.target.elements["search-text"].value.trim(),!u){c.warning({title:"Warning",message:"Search field cannot be empty.",position:"topRight"});return}R(),i=1,b();try{const t=await y(u,i,g),r=t.hits;if(d=Math.ceil(t.totalHits/g),r.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(r),d>1&&(p.button.addEventListener("click",f),L()),i>=d&&(m(),c.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.error("Error:",t),c.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{v()}};p.form.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
