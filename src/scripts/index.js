import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { Section } from './Section.js';
import { validation } from './utils.js';
import { initialCards } from './cards.js';
import '../page/index.css';

const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__add-button');
const profileForm = popupProfile.querySelector('.popup__form');
const profileInputName = popupProfile.querySelector('.popup__input_name');
const profileInputText = popupProfile.querySelector('.popup__input_text');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupLink = document.querySelector('.popup-link');
const linkForm = popupLink.querySelector('.popup__form');
const popupLinkOpenButton = document.querySelector('.profile__button');
const container = document.querySelector('.places');
const popupImage = document.querySelector('.popup-image');

const cardItem = new Section({
    items: initialCards,
    renderer: item => cardItem.addItem(addCard(item))
}, container);

const fullSizeImage = new PopupWithImage(popupImage);
fullSizeImage.setEventListeners();

const user = new UserInfo(profileName, profileJob);

const popupProfileSetings = new PopupWithForm(
    popupProfile,
    inputValues => {
        user.setUserInfo({
            name: inputValues.name,
            job: inputValues.job
        });
        popupProfileSetings.close();
    }
);
popupProfileSetings.setEventListeners();

const popupLinkSetings = new PopupWithForm(
    popupLink,
    inputValues => {
        cardItem.addItem(addCard(inputValues), true);
        popupLinkSetings.close();
    }
);
popupLinkSetings.setEventListeners();

const addCard = (data) => {
    const card = new Card(
        data,
        '.place-template',
        (link, name) => fullSizeImage.open({
            link: link,
            name: name
        })
    );
    return card.render();
}

cardItem.render();

const popupProfileValidation = new FormValidator(validation, profileForm);
popupProfileValidation.enableValidation();

const popupLinkValidation = new FormValidator(validation, linkForm);
popupLinkValidation.enableValidation();

popupProfileOpenButton.addEventListener('click', () => {
    const userData = user.getUserInfo();
    profileInputName.value = userData.name;
    profileInputText.value = userData.job;
    popupProfileSetings.open();
});

popupLinkOpenButton.addEventListener('click', () => {
    popupLinkSetings.open();
});
