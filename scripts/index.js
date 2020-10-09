const popup = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__add-button');
const popupProfileCloseButton = document.querySelector('.popup-profile__close-button');
const formElement = document.querySelector('.popup__form');
const input = document.querySelectorAll('.popup__input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//////////////////////////////////////////////////////
const popupImage = document.querySelector('.popup-link');
const popupImageOpenButton = document.querySelector('.profile__button');
const popupImageCloseButton = document.querySelector('.popup-link__close-button');
const placesContainer = document.querySelector('.places');
const addPlaceToForm = document.querySelector('.popup-link__form');
const elementTemplate = document.querySelector('#place-template').content;

openPopup = (popup) => {
    popup.classList.add('popup_opened');
    input[0].value = profileName.textContent;
    input[1].value = profileJob.textContent;
};

closePopup = (popup) => {
    popup.classList.remove('popup_opened');
};

submitFormHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = input[0].value;
    profileJob.textContent = input[1].value;
    closePopup(popupProfile);
};

addItemToContainer = (name, link) => {
    const placeElement = elementTemplate.cloneNode(true);
    placeElement.querySelector('.place__paragraph').textContent = name;
    placeElement.querySelector('.place__image').src = link;
    placeElement.querySelector('.place__like-button').addEventListener('click', evt => {
        evt.target.classList.toggle('place__like-button_active');
    });

    placeElement.querySelector('.place__remove-button').addEventListener('click', evt => {
        const place = evt.target.closest('.place');
        place.remove();
    });

    placesContainer.prepend(placeElement);

    const imagePopup = document.querySelector('.image-popup');
    const imagePopupOpenButton = document.querySelector('.place__image');
    const imagePopupCloseButton = imagePopup.querySelector('.image-popup__button');

    imagePopupOpenButton.addEventListener('click', evt => {
        const place = evt.target.closest('.place');
        const placeImage = place.querySelector('.place__image').src;
        const placeText = place.querySelector('.place__paragraph').textContent;
        imagePopup.querySelector('.image-popup__image').src = placeImage;
        imagePopup.querySelector('.image-popup__figcaption').textContent = placeText;
    });

    imagePopupOpenButton.addEventListener('click', () => openPopup(imagePopup));
    imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup)); 
};

initialCards.forEach(cards => {
    addItemToContainer(cards.name, cards.link)
});

popupProfileOpenButton.addEventListener('click', () => openPopup(popupProfile));

popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));

formElement.addEventListener('submit', submitFormHandler);

popupImageOpenButton.addEventListener('click', () => openPopup(popupImage));

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

addPlaceToForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const placeElementText = addPlaceToForm.querySelector('.popup-link__type_text').value;
    const placeElementUrl = addPlaceToForm.querySelector('.popup-link__type_url').value;
    addItemToContainer(placeElementText, placeElementUrl);
    closePopup(popupImage);
    addPlaceToForm.reset();
});
