/*
 * 4 способи повісити слухача події:
 * - в HTML на сам тег, прописуючи код у лапках (onclick="console.log('Button was clicked')") - погано
 * - в HTML на сам тег, викликаючи функція-обробник з js файлу(onclick="handleClick()"), працює на файлах без модуля - погано
 * - в js через властивість (button.onclick) - не можна додати два або більше слухача
 * - в js через addEventListener - найкращий варіант
 */

///////////////////////////////////////////////////////////////

/*
 * Popup
 * Є прихований popup з класом popup.
 * При натисканні на кнопку показати popup (клас popup_open).
 * При натисканні на ESC приховати.
 * Слухач ESC не повинен постійно висіти на window, а кнопка та слухач кліка повинні не діяти при відкритій модалці.
 */

// Refs
const refs = {
  button: document.querySelector('.open-popup-btn'),
  popup: document.querySelector('.popup'),
};

// Functions
const onOpenModal = () => {
  if (refs.popup.classList.contains('popup_open')) {
    return;
  }

  refs.popup.classList.add('popup_open');
  refs.button.disabled = true;

  window.addEventListener('keydown', handleEscPress);
  document.body.addEventListener('click', handleBodyClick);
};

const onCloseModal = event => {
  refs.popup.classList.remove('popup_open');
  refs.button.disabled = false;

  window.removeEventListener('keydown', handleEscPress);
  document.body.removeEventListener('click', handleBodyClick);
};

const handleEscPress = event => {
  if (event.code === 'Escape') {
    onCloseModal();
  }
};

const handleBodyClick = event => {
  if (event.target.tagName === 'BODY') {
    onCloseModal();
  }
};

// Listeners
refs.button.addEventListener('click', onOpenModal);
