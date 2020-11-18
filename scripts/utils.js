export const popupImage = document.querySelector('.popup-image');
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const popupImageFigcaption = popupImage.querySelector('.popup-image__figcaption');

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

export const imagePopup = (data) => {
    popupImagePicture.src = data.link;
    popupImagePicture.alt = data.name;
    popupImageFigcaption.textContent = data.name;
    openPopup(popupImage);
}
