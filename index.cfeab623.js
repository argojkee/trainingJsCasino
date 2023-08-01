const t={startBtn:document.querySelector(".js-button"),containerEl:document.querySelector(".js-container"),moneyEl:document.querySelector(".money"),basePriceEl:document.querySelector(".current-total"),cabinetEl:document.querySelector(".cabinet"),btnContainerEl:document.querySelector(".button-container"),statusEl:document.querySelector(".status"),backdropEl:document.querySelector(".backdrop"),timePolicyEl:document.querySelector(".time-policy"),policyContainerEl:document.querySelector(".policy"),closeModalBtn:document.querySelector(".close-btn"),cabinetBalnceEl:document.querySelector(".cabinet-balance-count"),formEl:document.querySelector(".js-operation-form"),addMoneyBtn:document.querySelector(".add-money"),takeMoneyBtn:document.querySelector(".take-money"),inputEl:document.querySelector(".js-operation-input"),messageCabinetInfo:document.querySelector(".info-cabinet"),toCabinetBtn:document.querySelector(".js-cabinet-btn")};let e,n=1,s=1;var o;let a=null!==(o=JSON.parse(localStorage.getItem("currentBalance")))&&void 0!==o?o:0;a<100&&(t.moneyEl.classList.add("lose"),u(),b()),f(),l(),E(),b(),y();const i=["0","1","2","3","4"];function c(o){event.preventDefault(),b();const f=o.target;var v;"DIV"!==f.nodeName&&(f.classList.contains("js-button")||f.classList.contains("current-total")?function(){t.btnContainerEl.removeEventListener("click",c),a-=e;const n=[];u(),t.statusEl.classList.remove("animate__backInDown"),t.statusEl.classList.remove("win"),t.statusEl.classList.remove("lose"),t.statusEl.textContent="Waiting for result. Good luck!!!",y(),l(),r(),[...t.containerEl.children].forEach(((o,c)=>{var u;(u=c,new Promise((t=>{setTimeout((()=>{const e=Math.floor(Math.random()*(3+s-1)+1);t(i[e])}),500*u)}))).then((t=>{o.textContent=t,n.push(t)})).finally((()=>{if(n.length===[...t.containerEl.children].length){if(n.every((t=>t===n[0]))){const n=10*s*e;a+=n,function(e){t.statusEl.classList.add("win"),t.statusEl.textContent=`Congratulation! You won ${e} credits`,t.statusEl.classList.add("animate__backInDown")}(n),l(),r()}else t.statusEl.textContent="LOSE, Try again",t.statusEl.classList.add("animate__backInDown"),t.statusEl.classList.add("lose"),a<100&&setTimeout((()=>{t.statusEl.classList.remove("win"),t.statusEl.classList.remove("lose"),t.statusEl.innerHTML='Please enter in your cabinet and up you balance to start. Minimum game price : <span style="color: rgb(0, 0, 255);">100</span> credits'}),1200);b()}}))}))}():f.classList.contains("kof-btn")?(n=(v=f).dataset.kof,m(v),d(v),E(),b()):f.classList.contains("mode-btn")&&function(t){m(t),d(t),s=Number(t.dataset.mode)}(f))}function l(){t.moneyEl.textContent=a}function r(){localStorage.setItem("currentBalance",a)}function u(){t.startBtn.setAttribute("disabled","disabled"),t.startBtn.classList.remove("active")}function d(t){t.classList.add("active")}function m(t){[...t.closest(".js-parrent").children].filter((t=>t.classList.contains("active"))).map((t=>t.classList.remove("active")))}function E(){t.basePriceEl.textContent=100*n}function b(){e=100*n,a<100?(t.btnContainerEl.removeEventListener("click",c),t.moneyEl.classList.add("lose")):e>a?(u(),t.moneyEl.classList.add("lose"),t.btnContainerEl.addEventListener("click",c)):(t.btnContainerEl.addEventListener("click",c),t.moneyEl.classList.remove("lose"),t.startBtn.removeAttribute("disabled"),t.startBtn.classList.add("active")),[...t.btnContainerEl.querySelectorAll(".kof-btn")].filter((t=>t.classList.contains("kof-btn"))).forEach((t=>{a<100*t.dataset.kof?M(t):I(t)}))}function y(){[...t.containerEl.children].forEach((t=>t.innerHTML="--"))}function f(){t.backdropEl.classList.remove("is-hidden"),L(t.cabinetEl),v(t.policyContainerEl);let e=1;t.timePolicyEl.textContent=e;const n=setInterval((()=>{e-=1,t.timePolicyEl.textContent=e,0===e&&(clearInterval(n),t.policyContainerEl.style.display="none",v(t.cabinetEl),I(t.closeModalBtn),L(t.messageCabinetInfo),t.backdropEl.addEventListener("click",p),t.formEl.addEventListener("input",B),t.formEl.addEventListener("submit",S),window.addEventListener("keydown",k),g())}),1e3)}function v(t){t.style.display="block"}function L(t){t.style.display="none"}function p(t){const e=t.target;(e.classList.contains("backdrop")||e.classList.contains("close-btn"))&&C()}function k(){"Escape"===event.code&&C()}function C(){b(),a<100?t.statusEl.innerHTML='Please enter in your cabinet and up you balance to start. Minimum game price : <span style="color: rgb(0, 0, 255);">100</span> credits':t.statusEl.textContent="Press on button to check you luck",t.statusEl.classList.remove("win"),t.statusEl.classList.remove("lose"),t.formEl.removeEventListener("input",B),t.formEl.removeEventListener("submit",S),t.backdropEl.classList.add("is-hidden"),t.backdropEl.removeEventListener("click",p),window.removeEventListener("keydown",k),M(t.closeModalBtn)}function g(){a<100?t.cabinetBalnceEl.classList.add("low"):t.cabinetBalnceEl.classList.remove("low"),t.cabinetBalnceEl.textContent=a}function B(e){"js-operation-input"===e.target.name&&(Number(e.target.value.trim())?(L(t.messageCabinetInfo),t.inputEl.classList.add("correct"),t.inputEl.classList.remove("incorrect"),I(t.addMoneyBtn),a>=Number(e.target.value.trim())?I(t.takeMoneyBtn):M(t.takeMoneyBtn)):""===t.inputEl.value?(L(t.messageCabinetInfo),q(),M(t.addMoneyBtn),M(t.takeMoneyBtn)):(t.inputEl.classList.add("incorrect"),t.inputEl.classList.remove("correct"),t.messageCabinetInfo.classList.add("error"),t.messageCabinetInfo.classList.remove("great"),t.messageCabinetInfo.textContent="Please, enter correct value!",v(t.messageCabinetInfo),M(t.addMoneyBtn),M(t.takeMoneyBtn)))}function S(e){event.preventDefault();const n=e.submitter;n.classList.contains("add-money")?(a+=Number(t.inputEl.value.trim()),t.messageCabinetInfo.textContent=`Thank you. Your balance up in ${Number(t.inputEl.value.trim())} credits. Good luck!`,h(),v(t.messageCabinetInfo),b()):n.classList.contains("take-money")&&(a-=Number(t.inputEl.value.trim()),t.messageCabinetInfo.textContent=`\nSuccessfully! Thank you for playing at our casino. ${Number(t.inputEl.value.trim())} credits will be credited to your card as soon as possible.`,h(),v(t.messageCabinetInfo),b()),t.formEl.reset(),M(t.addMoneyBtn),M(t.takeMoneyBtn),q(),r(),g(),l()}function I(t){t.removeAttribute("disabled")}function M(t){t.setAttribute("disabled","disabled")}function q(){t.inputEl.classList.remove("correct"),t.inputEl.classList.remove("incorrect")}function h(){t.messageCabinetInfo.classList.add("great"),t.messageCabinetInfo.classList.remove("error")}t.btnContainerEl.addEventListener("click",c),t.toCabinetBtn.addEventListener("click",f);
//# sourceMappingURL=index.cfeab623.js.map
