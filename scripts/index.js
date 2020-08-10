let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__add-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupSaveButton = popup.querySelector('.popup__save-button');

let formElement = document.querySelector('.popup__form');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

let popupToggle = function () {
    if (popup.classList.contains('popup_opened')) {
        nameInput.Value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


//

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    profileName.value = nameInput.textContent
    profileJob.value = jobInput.textContent
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);
popupSaveButton.addEventListener('click', formSubmitHandler);
