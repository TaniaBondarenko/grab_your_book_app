parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tnu0":[function(require,module,exports) {
module.exports={container:"_container_b6087",navWrapper:"_navWrapper_b6087",navigation:"_navigation_b6087",logoWrapper:"_logoWrapper_b6087",ulWrapper:"_ulWrapper_b6087",navList:"_navList_b6087",btn:"_btn_b6087",bookContainer:"_bookContainer_b6087",bookCard:"_bookCard_b6087",bookImg:"_bookImg_b6087",mainInfo:"_mainInfo_b6087",aboutBook:"_aboutBook_b6087"};
},{}],"Focm":[function(require,module,exports) {
"use strict";var o=e(require("./styles.css"));function e(o){return o&&o.__esModule?o:{default:o}}window.renderApp=a,window.getValues=p,window.getTheBooks=n,window.ShowBooks=c,window.styles=o.default,window.dataStore={isNotFiltered:!0,isDataLoading:!1,theBooksInfo:[],filteredBooks:[],books:[],random:""};const t="https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&`key=AIzaSyB3IbNanmebFpmTzWK6qEw79b_fYQyovEE`;";function n(o){return fetch(o).then(o=>o.json()).then(o=>window.dataStore.theBooksInfo=o.items.map(o=>o.volumeInfo)).then(()=>a()).catch(o=>{throw new Error("Data loading failed.")}),Promise.resolve({})}function a(){document.getElementById("app-root").innerHTML=` ${i()} `}function i(){return`<div class='${o.default.container}'>\n  <div class=${o.default.navWrapper}>\n            <nav class='${o.default.navigation}'>\n              <div class="${o.default.logoWrapper}">\n               <h1 class="mainHeader">Grab Your Book</h1>\n              </div>\n              <div class=${o.default.ulWrapper}>\n              <ul class="${o.default.navList}">\n              ${s()}\n              ${d()}\n              ${r()}\n              ${l()}\n              ${u()}\n              </ul>\n              </div>\n            </nav>\n            </div>\n            <div class='${o.default.bookContainer}'>\n           ${c()}\n            </div>\n         </div>`}function s(){return`<li>\n            <input type="search" placeholder="Type title or author"\n              class="searchWord"/>\n              <button class="${o.default.btn}" type='button' onclick="DoSearch(document.querySelector('.searchWord').value)">Find</button>\n          </li>`}function d(){return`<li>\n           <label for="categories">Choose a category:</label>\n            <select name="categories" id="categories" class="categories" onchange="(doFilter(this.value));" >\n              <option value='' selected disabled hidden >Category </option>\n              ${p("categories")}\n              </select>\n          </li>`}function r(){return`<li>\n           <label for="language">Select language:</label>\n            <select name="language" id="language" class="language" onchange="ShowBooks(doFilter(this.value));">\n              <option value="" selected disabled hidden>Language</option>\n              ${p("language")}\n              </select>\n          </li>`}function l(){return`<button class="${o.default.btn}" type='button' onclick="getRandomBooks(randomWord())">Get advise</button>`}function u(){return`<li>\n              <button class="${o.default.btn}" type='button' onclick="showAllBooks()">Show all</button>\n          </li>`}function c(){window.dataStore.isNotFiltered?window.dataStore.books=window.dataStore.theBooksInfo:window.dataStore.books=window.dataStore.filteredBooks;let e="";return window.dataStore.books.forEach(t=>{e+=`<div class='${o.default.bookCard}'>\n                              <div class='${o.default.mainInfo}'> \n                              <img class='${o.default.bookImg}' src=${void 0===t.imageLinks.thumbnail?"./images/book.png":`'${t.imageLinks.thumbnail}'`}'>\n                               <p class='bookTitle'><h3>${t.title}</h3></p>\n                               <p class='bookAuthor'>${t.authors}</p></div>\n                               <div class='${o.default.aboutBook}'><h4>Description</h4><br>${void 0===t.description?"You should read to find out":t.description}</div>\n                               </div>`}),e?`${e}`:"No books found"}module.hot&&module.hot.accept();const w=function(o){window.dataStore.isNotFiltered=!1,window.dataStore.filteredBooks=window.dataStore.theBooksInfo.filter(e=>void 0!==e.categories&&e.categories.join()===o.toLocaleString()||void 0!==e.language&&e.language===o.toLocaleString()),window.dataStore.filteredBooks,window.renderApp()},f=function(o){window.dataStore.isNotFiltered=!0,window.dataStore.filteredBooks=window.dataStore.theBooksInfo.filter(e=>e.title.toLocaleString().toLowerCase().includes(o)||e.authors.join(" ").split(" ").join("").toLowerCase().includes(o)),window.dataStore.isNotFiltered=!1,window.renderApp()},g=function(){const o=["flowers","season","heart","love","forest","beauty","good","sun","dog","winter","lake","money","fun","bird","book","king","ring"];return window.dataStore.random=o[Math.floor(Math.random()*o.length)]},h=function(o){n(`https://www.googleapis.com/books/v1/volumes?q=${o}&subject:drama&orderBy=newest&maxResults=4&\`key=AIzaSyB3IbNanmebFpmTzWK6qEw79b_fYQyovEE\`;`),window.dataStore.isNotFiltered=!0},b=function(){URL="https://www.googleapis.com/books/v1/volumes?q=subject:drama&orderBy=newest&maxResults=40&`key=AIzaSyB3IbNanmebFpmTzWK6qEw79b_fYQyovEE`;",n(URL),window.dataStore.isNotFiltered=!0};function p(o){let e=[];return window.dataStore.theBooksInfo.forEach(t=>{if(Array.isArray(t[`${o}`])){if(!e.includes(t[`${o}`].join()))return e.push(t[`${o}`].join())}else if(!e.includes(t[`${o}`]))return e.push(t[`${o}`])}),e.map(function(o){return`<option value='${o}'>${o}</option>`})}window.doFilter=w,window.DoSearch=f,window.getRandomBooks=h,window.randomWord=g,window.showAllBooks=b,n(t);
},{"./styles.css":"Tnu0"}]},{},["Focm"], null)
//# sourceMappingURL=grab_your_book_app.bb6973ec.js.map