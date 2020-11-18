import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { popupImage, openPopup, closePopup } from './utils.js';

const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__add-button');
const popupProfileCloseButton = popupProfile.querySelector('.popup-profile__close-button');
const formElement = document.querySelector('.popup__form');
const profileInputName = popupProfile.querySelector('.popup__input_name');
const profileInputText = popupProfile.querySelector('.popup__input_text');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupLink = document.querySelector('.popup-link');
const popupLinkOpenButton = document.querySelector('.profile__button');
const popupLinkCloseButton = popupLink.querySelector('.popup-link__close-button');
const container = document.querySelector('.places');
const addPlaceToForm = document.querySelector('.popup-link__form');
const popupLinkText = addPlaceToForm.querySelector('.popup-link__type_text');
const popupLinkUrl = addPlaceToForm.querySelector('.popup-link__type_url'); 
const popupImageCloseButton = popupImage.querySelector('.popup-image__close-button');


const openProfilePopup = () => {
    profileInputName.value = profileName.textContent;
    profileInputText.value = profileJob.textContent;
    openPopup(popupProfile);
}

const submitFormHandler = () => {
    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputText.value;
    closePopup(popupProfile);
}

const submitCard = () => {
    const cardInfo = {
        name: popupLinkText.value,
        link: popupLinkUrl.value
    };
    const item = addCard(cardInfo);
    container.prepend(item);
    closePopup(popupLink);
}

const addCard = (data) => (new Card(data, '.place-template')).render();

popupProfileOpenButton.addEventListener('click', openProfilePopup);

popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));

formElement.addEventListener('submit', submitFormHandler);

popupLinkOpenButton.addEventListener('click', () => openPopup(popupLink));

popupLinkCloseButton.addEventListener('click', () => closePopup(popupLink));

addPlaceToForm.addEventListener('submit', submitCard);

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

initialCards.forEach((data) => {
    const card = addCard(data);
    container.append(card);
});

Array.from(document.forms).forEach((form) => {
    const validation = new FormValidator({
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_disabled',
        inputErrorClass: 'popup__input_type_error',
        errorClass: 'popup__error_visible'
    }, form);
    validation.enableValidation();
});
