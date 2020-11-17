import { imagePopup } from './utils.js'

export class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._item = {
            templateSelector: templateSelector,
            placeSelector: '.place',
            imageSelector: '.place__image',
            paragraphSelector: '.place__paragraph',
            likeButtonSelector: '.place__like-button',
            likeButtonClass: 'place__like-button_active',
            removeButtonSelector: '.place__remove-button',
        };
    }

    _like() {
        this._likeButton.classList.toggle(this._item.likeButtonClass);
    }

    _delete() {
        this._template.remove();
    }

    _addItem() {
        this._template.querySelector(this._item.imageSelector).src = this._data.link;
        this._template.querySelector(this._item.imageSelector).alt = this._data.name;
        this._template.querySelector(this._item.paragraphSelector).textContent = this._data.name;
    }
    
    _setEventListeners() {
        this._likeButton = this._template.querySelector(this._item.likeButtonSelector);
        this._removeButton = this._template.querySelector(this._item.removeButtonSelector);

        this._likeButton.addEventListener('click', () => this._like());
        this._removeButton.addEventListener('click', () => this._delete());
        this._template.addEventListener('click', () => imagePopup(this._data));
    }

    render() {
        this._template = document
            .querySelector(this._item.templateSelector)
            .content
            .querySelector(this._item.placeSelector)
            .cloneNode(true);
        this._addItem();
        this._setEventListeners();

        return this._template;
    }
}