!function(){function e(){var e=document.querySelector(".card__form").value;n(zxcvbn(e).score,e)}function n(e,n){function r(e){return 0===e?"💩":1===e?"🙁":2===e?"😐":3===e?"🙂":"😍"}var t=n.length||0;console.log(t);var o=document.querySelector(".emoji"),c=document.querySelector(".card--ouput"),u=function(n){return 0===n?"❓":r(e)}(t),d=function(e){var n=document.createElement("span"),r=document.createTextNode(e);return n.appendChild(r),n.classList.add("emoji"),n}(u);c.removeChild(o),c.appendChild(d)}document.querySelector(".card__form").addEventListener("keyup",e)}();