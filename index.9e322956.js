!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var n,o=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o.default(e,t)};var n,o=(n=a("8NIkP"))&&n.__esModule?n:{default:n}}));var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return s.default(e)||i.default(e)||c.default(e)||l.default()};var s=u(a("kMC0W")),i=u(a("7AJDX")),l=u(a("8CtQK")),c=u(a("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}var d,f,m={startBtn:document.querySelector(".js-button"),containerEl:document.querySelector(".js-container"),moneyEl:document.querySelector(".money"),basePriceEl:document.querySelector(".current-total"),cabinetEl:document.querySelector(".cabinet"),btnContainerEl:document.querySelector(".button-container"),statusEl:document.querySelector(".status"),backdropEl:document.querySelector(".backdrop"),timePolicyEl:document.querySelector(".time-policy"),policyContainerEl:document.querySelector(".policy"),closeModalBtn:document.querySelector(".close-btn"),cabinetBalnceEl:document.querySelector(".cabinet-balance-count"),formEl:document.querySelector(".js-operation-form"),addMoneyBtn:document.querySelector(".add-money"),takeMoneyBtn:document.querySelector(".take-money"),inputEl:document.querySelector(".js-operation-input"),messageCabinetInfo:document.querySelector(".info-cabinet"),toCabinetBtn:document.querySelector(".js-cabinet-btn")},b=100,y=1,E=1,v=null!==(f=JSON.parse(localStorage.getItem("currentBalance")))&&void 0!==f?f:0;v<b&&(m.moneyEl.classList.add("lose"),C(),I()),w(),g(),x(),I(),_();var p=["0","1","2","3","4"];function L(t){event.preventDefault(),I();var n,o=t.target;"DIV"!==o.nodeName&&(o.classList.contains("js-button")||o.classList.contains("current-total")?function(){m.btnContainerEl.removeEventListener("click",L),v-=d;var t=[];C(),m.statusEl.classList.remove("animate__backInDown"),m.statusEl.classList.remove("win"),m.statusEl.classList.remove("lose"),m.statusEl.textContent="Waiting for result. Good luck!!!",_(),g(),k(),e(r)(m.containerEl.children).forEach((function(n,o){var a;(a=o,new Promise((function(e){setTimeout((function(){var t=Math.floor(Math.random()*(3+E-1)+1);e(p[t])}),500*a)}))).then((function(e){n.textContent=e,t.push(e)})).finally((function(){if(t.length===e(r)(m.containerEl.children).length){if(t.every((function(e){return e===t[0]}))){var n=10*E*d;v+=n,function(e){m.statusEl.classList.add("win"),m.statusEl.textContent="Congratulation! You won ".concat(e," credits"),m.statusEl.classList.add("animate__backInDown")}(n),g(),k()}else m.statusEl.textContent="LOSE, Try again",m.statusEl.classList.add("animate__backInDown"),m.statusEl.classList.add("lose"),v<b&&setTimeout((function(){m.statusEl.classList.remove("win"),m.statusEl.classList.remove("lose"),m.statusEl.innerHTML='Please enter in your cabinet and up you balance to start. Minimum game price : <span style="color: rgb(0, 0, 255);">'.concat(b,"</span> credits")}),1200);I()}}))}))}():o.classList.contains("kof-btn")?(y=(n=o).dataset.kof,S(n),M(n),x(),I()):o.classList.contains("mode-btn")&&function(e){S(e),M(e),E=Number(e.dataset.mode)}(o))}function g(){m.moneyEl.textContent=v}function k(){localStorage.setItem("currentBalance",v)}function C(){m.startBtn.setAttribute("disabled","disabled"),m.startBtn.classList.remove("active")}function M(e){e.classList.add("active")}function S(t){var n=t.closest(".js-parrent");e(r)(n.children).filter((function(e){return e.classList.contains("active")})).map((function(e){return e.classList.remove("active")}))}function x(){m.basePriceEl.textContent=b*y}function I(){d=b*y,v<b?(m.btnContainerEl.removeEventListener("click",L),m.moneyEl.classList.add("lose")):d>v?(C(),m.moneyEl.classList.add("lose"),m.btnContainerEl.addEventListener("click",L)):(m.btnContainerEl.addEventListener("click",L),m.moneyEl.classList.remove("lose"),m.startBtn.removeAttribute("disabled"),m.startBtn.classList.add("active")),e(r)(m.btnContainerEl.querySelectorAll(".kof-btn")).filter((function(e){return e.classList.contains("kof-btn")})).forEach((function(e){v<e.dataset.kof*b?D(e):T(e)}))}function _(){e(r)(m.containerEl.children).forEach((function(e){return e.innerHTML="--"}))}function w(){m.backdropEl.classList.remove("is-hidden"),h(m.cabinetEl),B(m.policyContainerEl);var e=1;m.timePolicyEl.textContent=e;var t=setInterval((function(){e-=1,m.timePolicyEl.textContent=e,0===e&&(clearInterval(t),m.policyContainerEl.style.display="none",B(m.cabinetEl),T(m.closeModalBtn),h(m.messageCabinetInfo),m.backdropEl.addEventListener("click",q),m.formEl.addEventListener("input",N),m.formEl.addEventListener("submit",O),window.addEventListener("keydown",P),A())}),1e3)}function B(e){e.style.display="block"}function h(e){e.style.display="none"}function q(e){var t=e.target;(t.classList.contains("backdrop")||t.classList.contains("close-btn"))&&j()}function P(){"Escape"===event.code&&j()}function j(){I(),v<b?m.statusEl.innerHTML='Please enter in your cabinet and up you balance to start. Minimum game price : <span style="color: rgb(0, 0, 255);">'.concat(b,"</span> credits"):m.statusEl.textContent="Press on button to check you luck",m.statusEl.classList.remove("win"),m.statusEl.classList.remove("lose"),m.formEl.removeEventListener("input",N),m.formEl.removeEventListener("submit",O),m.backdropEl.classList.add("is-hidden"),m.backdropEl.removeEventListener("click",q),window.removeEventListener("keydown",P),D(m.closeModalBtn)}function A(){v<b?m.cabinetBalnceEl.classList.add("low"):m.cabinetBalnceEl.classList.remove("low"),m.cabinetBalnceEl.textContent=v}function N(e){"js-operation-input"===e.target.name&&(Number(e.target.value.trim())?(h(m.messageCabinetInfo),m.inputEl.classList.add("correct"),m.inputEl.classList.remove("incorrect"),T(m.addMoneyBtn),v>=Number(e.target.value.trim())?T(m.takeMoneyBtn):D(m.takeMoneyBtn)):""===m.inputEl.value?(h(m.messageCabinetInfo),H(),D(m.addMoneyBtn),D(m.takeMoneyBtn)):(m.inputEl.classList.add("incorrect"),m.inputEl.classList.remove("correct"),m.messageCabinetInfo.classList.add("error"),m.messageCabinetInfo.classList.remove("great"),m.messageCabinetInfo.textContent="Please, enter correct value!",B(m.messageCabinetInfo),D(m.addMoneyBtn),D(m.takeMoneyBtn)))}function O(e){event.preventDefault();var t=e.submitter;t.classList.contains("add-money")?(v+=Number(m.inputEl.value.trim()),m.messageCabinetInfo.textContent="Thank you. Your balance up in ".concat(Number(m.inputEl.value.trim())," credits. Good luck!"),J(),B(m.messageCabinetInfo),I()):t.classList.contains("take-money")&&(v-=Number(m.inputEl.value.trim()),m.messageCabinetInfo.textContent="\nSuccessfully! Thank you for playing at our casino. ".concat(Number(m.inputEl.value.trim())," credits will be credited to your card as soon as possible."),J(),B(m.messageCabinetInfo),I()),m.formEl.reset(),D(m.addMoneyBtn),D(m.takeMoneyBtn),H(),k(),A(),g()}function T(e){e.removeAttribute("disabled")}function D(e){e.setAttribute("disabled","disabled")}function H(){m.inputEl.classList.remove("correct"),m.inputEl.classList.remove("incorrect")}function J(){m.messageCabinetInfo.classList.add("great"),m.messageCabinetInfo.classList.remove("error")}m.btnContainerEl.addEventListener("click",L),m.toCabinetBtn.addEventListener("click",w)}();
//# sourceMappingURL=index.9e322956.js.map
