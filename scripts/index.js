const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__add-button');
const popupProfileCloseButton = popupProfile.querySelector('.popup-profile__close-button');
const formElement = document.querySelector('.popup__form');
const profileInputName = popupProfile.querySelector('.popup__input_name');
const profileInputText = popupProfile.querySelector('.popup__input_text');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//////////////////////////////////////////////////////
const popupLink = document.querySelector('.popup-link');
const popupLinkOpenButton = document.querySelector('.profile__button');
const popupLinkCloseButton = popupLink.querySelector('.popup-link__close-button');
const placesContainer = document.querySelector('.places');
const addPlaceToForm = document.querySelector('.popup-link__form');
const template = document.querySelector('.place-template');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close-button');



const togglePopup = (popup) => {
    popup.classList.toggle('popup_opened');
};

const openProfilePopup = () => {
    profileInputName.value = profileName.textContent;
    profileInputText.value = profileJob.textContent;
    togglePopup(popupProfile);
};

const submitFormHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = profileInputName.value;
    profileJob.textContent = profileInputText.value;
    togglePopup(popupProfile);
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
        popupImage.querySelector('.popup-image__figcaption').textContent = placeText;
        togglePopup(popupImage);
    });

    return card;
};

const submitCard = (evt) => {
    evt.preventDefault();
    const arr = {};
    arr.name = addPlaceToForm.querySelector('.popup-link__type_text').value;
    arr.link = addPlaceToForm.querySelector('.popup-link__type_url').value; 
    const item = addCard(arr);
    placesContainer.prepend(item);
    togglePopup(popupLink);
};

popupProfileOpenButton.addEventListener('click', () => togglePopup(popupProfile));

popupProfileCloseButton.addEventListener('click', () => togglePopup(popupProfile));

formElement.addEventListener('submit', submitFormHandler);

popupLinkOpenButton.addEventListener('click', () => togglePopup(popupLink));

popupLinkCloseButton.addEventListener('click', () => togglePopup(popupLink));

addPlaceToForm.addEventListener('submit', submitCard);

popupImageCloseButton.addEventListener('click', () => togglePopup(popupImage));

renderCards();
