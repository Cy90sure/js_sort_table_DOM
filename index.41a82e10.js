function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r=document.querySelector("tbody"),n=function(e){if(Array.isArray(e))return t(e)}(e=r.querySelectorAll("tr"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";n.sort(function(r,n){var o=r.querySelectorAll("td")[t].textContent,c=n.querySelectorAll("td")[t].textContent;switch(e){case"text":return o.localeCompare(c);case"number":return o-c;case"money":return(o=parseFloat(o.replace(/[^0-9.]/g,"")))-(c=parseFloat(c.replace(/[^0-9.]/g,"")))}}),n.forEach(function(t){r.appendChild(t)})}document.querySelector("#nameSort").addEventListener("click",function(t){o(0,"text")}),document.querySelector("#positionSort").addEventListener("click",function(t){o(1,"text")}),document.querySelector("#ageSort").addEventListener("click",function(t){o(2,"number")}),document.querySelector("#salarySort").addEventListener("click",function(t){o(3,"money")});
//# sourceMappingURL=index.41a82e10.js.map
