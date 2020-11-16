import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const popup = document.querySelectorAll('.popup');
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

const popupImage = document.querySelector('.popup-image');
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const popupImageFigcuption = popupImage.querySelector('.popup-image__figcaption');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close-button');

const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscapeButton);
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscapeButton);
}

const overlayPopup = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

const closeEscapeButton = (evt) => {
    if (evt.key === 'Escape') {
        const closeModal = document.querySelector('.popup_opened');
        closePopup(closeModal);
    } 
}

const openProfilePopup = () => {
    profileInputName.value = profileName.textContent;
    profileInputText.value = profileJob.textContent;
    openPopup(popupProfile);
}

const submitFormHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputText.value;
    closePopup(popupProfile);
}

export const imagePopup = (data) => {
    popupImagePicture.src = data.link;
    popupImagePicture.alt = data.name;
    popupImageFigcuption.textContent = data.name;
    openPopup(popupImage);
}

const submitCard = (evt) => {
    evt.preventDefault();
    const arr = {};
    arr.name = popupLinkText.value;
    arr.link = popupLinkUrl.value;
    const item = addCard(arr);
    container.prepend(item);
    closePopup(popupLink);
}

const addCard = (data) => (new Card(data, '.place-template')).render();

popupProfile.addEventListener('click', overlayPopup);

popupProfileOpenButton.addEventListener('click', () => openPopup(popupProfile));

popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));

formElement.addEventListener('submit', submitFormHandler);

popupLink.addEventListener('click', overlayPopup);

popupLinkOpenButton.addEventListener('click', () => openPopup(popupLink));

popupLinkCloseButton.addEventListener('click', () => closePopup(popupLink));

addPlaceToForm.addEventListener('submit', submitCard);

popupImage.addEventListener('click', overlayPopup);

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