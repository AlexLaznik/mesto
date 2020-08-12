let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__add-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let input = formElement.querySelectorAll('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let popupToggle = function () {
    if (popup.classList.contains('popup_opened')) {
        input[0].value = profileName.textContent;
        input[1].value = profileJob.textContent;
    } 
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

//

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = input[0].value;
    profileJob.textContent = input[1].value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);
