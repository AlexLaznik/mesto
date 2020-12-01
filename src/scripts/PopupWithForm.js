import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmitCallback) {
        super(popupSelector)
        this._formSubmitCallback = formSubmitCallback;
        this._data.formSelector = '.popup__form';
        this._data.inputSelector = '.popup__input';
    }

    _getInputValues() {
        this._inputs = this._popupSelector.querySelectorAll(this._data.inputSelector);
        const formValues = {};
        this._inputs.forEach(input => {
            formValues[input.name] = input.value;
        });

        return formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupSelector.querySelector(this._data.formSelector);
        this._form.addEventListener('submit', () => {
            this._formSubmitCallback(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}