!function(){function e(){var e=document.querySelector(".card__form").value;n(zxcvbn(e).score)}function n(e){console.log(e);var n=document.querySelector(".emoji"),o=document.querySelector(".card--ouput"),r=function(e){return 0===e?"💩":1===e?"🙁":2===e?"😐":3===e?"🙂":"😍"}(e),t=function(e){var n=document.createElement("span"),o=document.createTextNode(e);return n.appendChild(o),n.classList.add("emoji"),n}(r);o.removeChild(n),o.appendChild(t)}document.querySelector(".card__form").addEventListener("keyup",e)}();