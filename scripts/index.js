let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__add-button');
let popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let input = formElement.querySelectorAll('.popup__input');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

let popupToggle = () => {
    if (popup.classList.contains('popup_opened')) {
        input[0].value = profileName.textContent;
        input[1].value = profileJob.textContent;
    } 
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = input[0].value;
    profileJob.textContent = input[1].value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);

///////////////////////////////////////////////////////////

let popupImage = document.querySelector('.popup-link');
let popupImageOpenButton = document.querySelector('.profile__button');
let popupImageCloseButton = document.querySelector('.popup-link__close-button');
let imageFormElement = document.querySelector('.popup-link__form');
let imageInput = document.querySelectorAll('.popup-link__input');
let placeImage = document.querySelector('.place__image');
let placeParagraph = document.querySelector('.place__paragraph');

let popupImageToggle = () => {
    if (popupImage.classList.contains('popup_opened')) {
        
    } 
    popupImage.classList.toggle('popup_opened');
}

popupImageOpenButton.addEventListener('click', popupImageToggle);
popupImageCloseButton.addEventListener('click', popupImageToggle);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const placesContainer = document.querySelector('.places');
const addPlaceToForm = document.querySelector('.popup-link__form');

const addItemToContainer = (name, link) => {
    const placeElement = document.querySelector('#place-template').content.cloneNode(true);
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
    const imagePopupOpen = document.querySelector('.place__image');
    const imagePopupCloseButton = document.querySelector('.image-popup__button');
    imagePopupOpen.addEventListener('click', evt => {
        const place = evt.target.closest('.place');
        const placeImage = place.querySelector('.place__image').src;
        const placeText = place.querySelector('.place__paragraph').textContent;
        imagePopup.querySelector('.image-popup__image').src = placeImage;
        imagePopup.querySelector('.image-popup__figcaption').textContent = placeText;
        imagePopup.classList.add('popup_opened');
    });

    imagePopupClose = () =>{
        imagePopup.classList.remove('popup_opened');
    };
    imagePopupCloseButton.addEventListener('click', imagePopupClose);
}

initialCards.forEach(cards => {
    addItemToContainer(cards.name, cards.link)
});

addPlaceToForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const placeElement = addPlaceToForm.querySelector('.popup-link__input-0').value;
    const placeElement1 = addPlaceToForm.querySelector('.popup-link__input-1').value;
    addItemToContainer(placeElement, placeElement1);
    popupImageToggle();
    addPlaceToForm.reset();
});
