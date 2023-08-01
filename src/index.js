import 'animate.css';
//* Casino 777
const refs = {
  startBtn: document.querySelector('.js-button'),
  containerEl: document.querySelector('.js-container'),
  moneyEl: document.querySelector('.money'),
  basePriceEl: document.querySelector('.current-total'),
  cabinetEl: document.querySelector('.cabinet'),
  btnContainerEl: document.querySelector('.button-container'),
  statusEl: document.querySelector('.status'),
  backdropEl: document.querySelector('.backdrop'),
  timePolicyEl: document.querySelector('.time-policy'),
  policyContainerEl: document.querySelector('.policy'),
  closeModalBtn: document.querySelector('.close-btn'),
  cabinetBalnceEl: document.querySelector('.cabinet-balance-count'),
  formEl: document.querySelector('.js-operation-form'),
  addMoneyBtn: document.querySelector('.add-money'),
  takeMoneyBtn: document.querySelector('.take-money'),
  inputEl: document.querySelector('.js-operation-input'),
  messageCabinetInfo: document.querySelector('.info-cabinet'),
  toCabinetBtn: document.querySelector('.js-cabinet-btn'),
};

const BASE_PRICE = 100;
let currentKof = 1;
let currentGameCost;
let currentModeKof = 1;

let currentMoney = JSON.parse(localStorage.getItem('currentBalance')) ?? 0;

checkCurrentBalance();

openBackdrop();

refreshCurrentMoney();
currentGamePrice();
canPlay();
resetFields();

const elements = ['0', '1', '2', '3', '4'];

refs.btnContainerEl.addEventListener('click', onBtnClick);
refs.toCabinetBtn.addEventListener('click', openBackdrop);

function onBtnClick(e) {
  event.preventDefault();
  canPlay();
  const target = e.target;

  if (target.nodeName === 'DIV') {
    return;
  }

  if (
    target.classList.contains('js-button') ||
    target.classList.contains('current-total')
  ) {
    onStart();
  } else if (target.classList.contains('kof-btn')) {
    onKofSelect(target);
  } else if (target.classList.contains('mode-btn')) {
    onModeSelect(target);
  }
}

function createResult(delay) {
  return new Promise(res => {
    setTimeout(() => {
      const randomElement = Math.floor(
        Math.random() * (3 + currentModeKof - 1) + 1
      );
      res(elements[randomElement]);
    }, delay * 500);
  });
}

function onStart() {
  refs.btnContainerEl.removeEventListener('click', onBtnClick);
  currentMoney -= currentGameCost;
  const result = [];

  disableButton();
  waitingAttention();
  resetFields();

  refreshCurrentMoney();
  refreshLocalStorage();

  [...refs.containerEl.children].forEach((box, i) => {
    createResult(i)
      .then(value => {
        box.textContent = value;
        result.push(value);
      })
      .finally(() => {
        if (result.length !== [...refs.containerEl.children].length) {
          return;
        }

        if (result.every(element => element === result[0])) {
          const prize = currentModeKof * 10 * currentGameCost;
          currentMoney += prize;
          attentionWin(prize);
          refreshCurrentMoney();
          refreshLocalStorage();
        } else {
          attentionLose();
        }

        canPlay();
      });
  });
}

function refreshCurrentMoney() {
  refs.moneyEl.textContent = currentMoney;
}

function refreshLocalStorage() {
  localStorage.setItem('currentBalance', currentMoney);
}

function checkKofBtn() {
  [...refs.btnContainerEl.querySelectorAll('.kof-btn')]
    .filter(element => element.classList.contains('kof-btn'))
    .forEach(btn => {
      if (currentMoney < btn.dataset.kof * BASE_PRICE) {
        disableBtn(btn);
      } else {
        enableBtn(btn);
      }
    });
}
function disableButton() {
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.startBtn.classList.remove('active');
}

function enableButton() {
  refs.startBtn.removeAttribute('disabled');
  refs.startBtn.classList.add('active');
}

function currentBtn(btn) {
  btn.classList.add('active');
}

function removeCurrentBtn(button) {
  const parrent = button.closest('.js-parrent');

  [...parrent.children]
    .filter(btn => btn.classList.contains('active'))
    .map(btn => btn.classList.remove('active'));
}

function currentGamePrice() {
  refs.basePriceEl.textContent = BASE_PRICE * currentKof;
}

function canPlay() {
  refreshCurrentGameCost();
  if (currentMoney < BASE_PRICE) {
    refs.btnContainerEl.removeEventListener('click', onBtnClick);
    refs.moneyEl.classList.add('lose');
  } else if (currentGameCost > currentMoney) {
    disableButton();
    refs.moneyEl.classList.add('lose');
    refs.btnContainerEl.addEventListener('click', onBtnClick);
  } else {
    refs.btnContainerEl.addEventListener('click', onBtnClick);
    refs.moneyEl.classList.remove('lose');
    enableButton();
  }
  checkKofBtn();
}

function refreshCurrentGameCost() {
  currentGameCost = BASE_PRICE * currentKof;
}

function checkCurrentBalance() {
  if (currentMoney < BASE_PRICE) {
    refs.moneyEl.classList.add('lose');
    disableButton();

    canPlay();
  }
}

function onModeSelect(btn) {
  removeCurrentBtn(btn);
  currentBtn(btn);

  currentModeKof = Number(btn.dataset.mode);
}

function onKofSelect(btn) {
  currentKof = btn.dataset.kof;

  removeCurrentBtn(btn);
  currentBtn(btn);
  currentGamePrice();
  canPlay();
}

function resetFields() {
  [...refs.containerEl.children].forEach(box => (box.innerHTML = '--'));
}

function attentionToStart() {
  if (currentMoney < BASE_PRICE) {
    refs.statusEl.innerHTML = `Please enter in your cabinet and up your balance to start. Minimum game price : <span style="color: rgb(0, 0, 255);">${BASE_PRICE}</span> credits`;
  } else {
    refs.statusEl.textContent = `Press on button to check your luck`;
  }
  refs.statusEl.classList.remove('win');
  refs.statusEl.classList.remove('lose');
}

function attentionWin(prize) {
  refs.statusEl.classList.add('win');
  refs.statusEl.textContent = `Congratulation! You won ${prize} credits`;
  refs.statusEl.classList.add('animate__backInDown');
}

function attentionLose() {
  refs.statusEl.textContent = 'LOSE, Try again';
  refs.statusEl.classList.add('animate__backInDown');
  refs.statusEl.classList.add('lose');
  if (currentMoney < BASE_PRICE) {
    setTimeout(() => {
      refs.statusEl.classList.remove('win');
      refs.statusEl.classList.remove('lose');
      refs.statusEl.innerHTML = `Please enter in your cabinet and up you balance to start. Minimum game price : <span style="color: rgb(0, 0, 255);">${BASE_PRICE}</span> credits`;
    }, 1200);
  }
}

function waitingAttention() {
  refs.statusEl.classList.remove('animate__backInDown');
  refs.statusEl.classList.remove('win');
  refs.statusEl.classList.remove('lose');
  refs.statusEl.textContent = 'Waiting for result. Good luck!!!';
}

function openBackdrop() {
  refs.backdropEl.classList.remove('is-hidden');
  hideElement(refs.cabinetEl);
  showElement(refs.policyContainerEl);
  let currnetTimeWaiting = 5;
  refs.timePolicyEl.textContent = currnetTimeWaiting;
  const interval = setInterval(() => {
    currnetTimeWaiting -= 1;
    refs.timePolicyEl.textContent = currnetTimeWaiting;

    if (currnetTimeWaiting === 0) {
      clearInterval(interval);
      refs.policyContainerEl.style.display = 'none';
      showElement(refs.cabinetEl);
      enableBtn(refs.closeModalBtn);
      hideElement(refs.messageCabinetInfo);
      refs.backdropEl.addEventListener('click', onBackdrop);
      refs.formEl.addEventListener('input', onInputChange);
      refs.formEl.addEventListener('submit', onSubmit);
      window.addEventListener('keydown', onEscBackdrop);
      refreshCabinetBalance();
    }
  }, 1000);
}

function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}

function onBackdrop(e) {
  const target = e.target;
  if (
    target.classList.contains('backdrop') ||
    target.classList.contains('close-btn')
  ) {
    closeBackdrop();
  }
}

function onEscBackdrop() {
  const target = event.code;
  if (target !== 'Escape') {
    return;
  }
  closeBackdrop();
}

function closeBackdrop() {
  canPlay();
  attentionToStart();
  refs.formEl.removeEventListener('input', onInputChange);
  refs.formEl.removeEventListener('submit', onSubmit);
  refs.backdropEl.classList.add('is-hidden');
  refs.backdropEl.removeEventListener('click', onBackdrop);
  window.removeEventListener('keydown', onEscBackdrop);
  disableBtn(refs.closeModalBtn);
}

function refreshCabinetBalance() {
  if (currentMoney < BASE_PRICE) {
    refs.cabinetBalnceEl.classList.add('low');
  } else {
    refs.cabinetBalnceEl.classList.remove('low');
  }
  refs.cabinetBalnceEl.textContent = currentMoney;
}

function onInputChange(e) {
  if (e.target.name !== 'js-operation-input') {
    return;
  }
  if (Number(e.target.value.trim())) {
    hideElement(refs.messageCabinetInfo);
    correctInputValue();
    enableBtn(refs.addMoneyBtn);
    if (currentMoney >= Number(e.target.value.trim())) {
      enableBtn(refs.takeMoneyBtn);
    } else {
      disableBtn(refs.takeMoneyBtn);
    }
  } else if (refs.inputEl.value === '') {
    hideElement(refs.messageCabinetInfo);
    clearBorderInput();
    disableBtn(refs.addMoneyBtn);
    disableBtn(refs.takeMoneyBtn);
  } else {
    incorrectInputValue();
    errorMessageCabinet();
    refs.messageCabinetInfo.textContent = 'Please, enter correct value!';
    showElement(refs.messageCabinetInfo);
    disableBtn(refs.addMoneyBtn);
    disableBtn(refs.takeMoneyBtn);
  }
}

function onSubmit(e) {
  event.preventDefault();
  const target = e.submitter;
  if (target.classList.contains('add-money')) {
    onAddMoneyBtn();
  } else if (target.classList.contains('take-money')) {
    onTakeMoneyBtn();
  }

  refs.formEl.reset();
  disableBtn(refs.addMoneyBtn);
  disableBtn(refs.takeMoneyBtn);
  clearBorderInput();
  refreshLocalStorage();
  refreshCabinetBalance();
  refreshCurrentMoney();
}
function correctInputValue() {
  refs.inputEl.classList.add('correct');
  refs.inputEl.classList.remove('incorrect');
}

function incorrectInputValue() {
  refs.inputEl.classList.add('incorrect');
  refs.inputEl.classList.remove('correct');
}

function enableBtn(btn) {
  btn.removeAttribute('disabled');
}

function disableBtn(btn) {
  btn.setAttribute('disabled', 'disabled');
}

function clearBorderInput() {
  refs.inputEl.classList.remove('correct');
  refs.inputEl.classList.remove('incorrect');
}

function onAddMoneyBtn() {
  currentMoney += Number(refs.inputEl.value.trim());
  refs.messageCabinetInfo.textContent = `Thank you. Your balance up in ${Number(
    refs.inputEl.value.trim()
  )} credits. Good luck!`;
  greatMessageCabinet();
  showElement(refs.messageCabinetInfo);
  canPlay();
}

function onTakeMoneyBtn() {
  currentMoney -= Number(refs.inputEl.value.trim());
  refs.messageCabinetInfo.textContent = `
Successfully! Thank you for playing at our casino. ${Number(
    refs.inputEl.value.trim()
  )} credits will be credited to your card as soon as possible.`;
  greatMessageCabinet();
  showElement(refs.messageCabinetInfo);
  canPlay();
}

function greatMessageCabinet() {
  refs.messageCabinetInfo.classList.add('great');
  refs.messageCabinetInfo.classList.remove('error');
}

function errorMessageCabinet() {
  refs.messageCabinetInfo.classList.add('error');
  refs.messageCabinetInfo.classList.remove('great');
}
