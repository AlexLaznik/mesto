export const popupProfile = document.querySelector('.popup-profile');
export const popupProfileOpenButton = document.querySelector('.profile__add-button');
export const popupProfileCloseButton = popupProfile.querySelector('.popup-profile__close-button');
export const formElement = document.querySelector('.popup__form');
export const profileInputName = popupProfile.querySelector('.popup__input_name');
export const profileInputText = popupProfile.querySelector('.popup__input_text');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const popupLink = document.querySelector('.popup-link');
export const popupLinkOpenButton = document.querySelector('.profile__button');
export const popupLinkCloseButton = popupLink.querySelector('.popup-link__close-button');
export const container = document.querySelector('.places');
export const addPlaceToForm = document.querySelector('.popup-link__form');
export const popupLinkText = addPlaceToForm.querySelector('.popup-link__type_text');
export const popupLinkUrl = addPlaceToForm.querySelector('.popup-link__type_url'); 

export const popupImage = document.querySelector('.popup-image');
export const popupImagePicture = popupImage.querySelector('.popup-image__picture');
export const popupImageFigcaption = popupImage.querySelector('.popup-image__figcaption');
export const popupImageCloseButton = popupImage.querySelector('.popup-image__close-button');

export const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', overlayPopup);
    document.addEventListener('keydown', closeEscapeButton);
}

export const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', overlayPopup);
    document.removeEventListener('keydown', closeEscapeButton);
}

export const overlayPopup = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

export const closeEscapeButton = (evt) => {
    if (evt.key === 'Escape') {
        const closeModal = document.querySelector('.popup_opened');
        closePopup(closeModal);
    } 
}

export const openProfilePopup = () => {
    profileInputName.value = profileName.textContent;
    profileInputText.value = profileJob.textContent;
    openPopup(popupProfile);
}

export const submitFormHandler = () => {
    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputText.value;
    closePopup(popupProfile);
}

export const imagePopup = (data) => {
    popupImagePicture.src = data.link;
    popupImagePicture.alt = data.name;
    popupImageFigcaption.textContent = data.name;
    openPopup(popupImage);
}

export const submitCard = () => {
    const cardInfo = {
        name: popupLinkText.value,
        link: popupLinkUrl.value
    };
    const item = addCard(cardInfo);
    container.prepend(item);
    closePopup(popupLink);
}
