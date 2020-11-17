import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { 
    popupProfile, 
    popupProfileOpenButton, 
    popupProfileCloseButton, 
    formElement,
    popupLink,
    popupLinkOpenButton,
    popupLinkCloseButton,
    container,
    addPlaceToForm,
    popupImage,
    popupImageCloseButton,
    openPopup,
    closePopup,
    openProfilePopup,
    submitFormHandler,
    submitCard
} from './utils.js';

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