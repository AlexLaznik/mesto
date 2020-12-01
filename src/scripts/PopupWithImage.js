import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._data.pictureSelector = '.popup-image__picture';
        this._data.figcaptionSelector = '.popup-image__figcaption';
        this._image = this._popupSelector.querySelector(this._data.pictureSelector);
        this._figcaption = this._popupSelector.querySelector(this._data.figcaptionSelector);
    }

    open({link, name}) {
        this._image.src = link;
        this._image.alt = name;
        this._figcaption.textContent = name;

        super.open();
    }

}