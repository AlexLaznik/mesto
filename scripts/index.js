const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__add-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const formElement = popup.querySelector('.popup__form');
const input = formElement.querySelectorAll('.popup__input');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
//////////////////////////////////////////////////////
const popupImage = document.querySelector('.popup-link');
const popupImageOpenButton = document.querySelector('.profile__button');
const popupImageCloseButton = popupImage.querySelector('.popup-link__close-button');
const placesContainer = document.querySelector('.places');
const addPlaceToForm = popupImage.querySelector('.popup-link__form');
const elementTemplate = document.querySelector('#place-template').content;

openPopupWindow = () => {
    popup.classList.add('popup_opened');
    input[0].value = profileName.textContent;
    input[1].value = profileJob.textContent;
}

closePopupWindow = () => {
    popup.classList.remove('popup_opened');
}

submitFormHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = input[0].value;
    profileJob.textContent = input[1].value;
    closePopupWindow();
}

openModalWindow = () => {
    popupImage.classList.add('popup_opened');
}

closeModalWindow = () => {
    popupImage.classList.remove('popup_opened');
}

addPlaceToForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const placeElementText = addPlaceToForm.querySelector('.popup-link__type_text').value;
    const placeElementUrl = addPlaceToForm.querySelector('.popup-link__type_url').value;
    addItemToContainer(placeElementText, placeElementUrl);
    closeModalWindow();
    addPlaceToForm.reset();
});

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
        openImagePopup();  
    });
    openImagePopup = () => {
        imagePopup.classList.add('popup_opened');
    }
    closeImagePopup = () => {
        imagePopup.classList.remove('popup_opened');
    };
    imagePopupOpenButton.addEventListener('click', openImagePopup);
    imagePopupCloseButton.addEventListener('click', closeImagePopup); 
}

initialCards.forEach(cards => {
    addItemToContainer(cards.name, cards.link)
});

popupOpenButton.addEventListener('click', openPopupWindow);
popupCloseButton.addEventListener('click', closePopupWindow);
formElement.addEventListener('submit', submitFormHandler );
popupImageOpenButton.addEventListener('click', openModalWindow);
popupImageCloseButton.addEventListener('click', closeModalWindow);
