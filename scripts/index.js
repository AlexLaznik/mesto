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
const placesContainer = document.querySelector('.places');
const addPlaceToForm = document.querySelector('.popup-link__form');
const template = document.querySelector('.place-template');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close-button');



const openPopup = (popup) => {
    popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};

const overlayPopup = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
};

const closeEscapeButton = (evt) => {
    if (evt.key === 'Escape') {
        const closeModal = document.querySelector('.popup_opened');
        closePopup(closeModal);
        closeModal.removeEventListener('keydown', closeEscapeButton);
    } 
};

const openProfilePopup = () => {
    profileInputName.value = profileName.textContent;
    profileInputText.value = profileJob.textContent;
    openPopup(popupProfile);
};

const submitFormHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputText.value;
    closePopup(popupProfile);
};

const renderCards = () => {
    const items = initialCards.map(element => addCard(element));
    placesContainer.append(...items);
};

const addCard = (data) => {
    const card = template.content.cloneNode(true);
    card.querySelector('.place__image').src = data.link;
    card.querySelector('.place__image').alt = data.name;
    card.querySelector('.place__paragraph').textContent = data.name;

    card.querySelector('.place__like-button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('place__like-button_active');
    });

    card.querySelector('.place__remove-button').addEventListener('click', (evt) => {
        const place = evt.target.closest('.place');
        place.remove();
    });

    card.querySelector('.place__image').addEventListener('click', (evt) => {
        const place = evt.target.closest('.place');
        const placeImage = place.querySelector('.place__image').src;
        const placeText = place.querySelector('.place__paragraph').textContent;
        popupImage.querySelector('.popup-image__picture').src = placeImage;
        popupImage.querySelector('.popup-image__picture').alt = placeText;
        popupImage.querySelector('.popup-image__figcaption').textContent = placeText;
        openPopup(popupImage);
    });

    return card;
};

const submitCard = (evt) => {
    evt.preventDefault();
    const arr = {};
    const name = addPlaceToForm.querySelector('.popup-link__type_text');
    const link = addPlaceToForm.querySelector('.popup-link__type_url'); 
    arr.name = name.value;
    arr.link = link.value;
    const item = addCard(arr);
    placesContainer.prepend(item);
    closePopup(popupLink);
};

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

document.addEventListener('keydown', closeEscapeButton);

renderCards();
