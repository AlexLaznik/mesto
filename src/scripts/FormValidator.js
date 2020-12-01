export class FormValidator {
    constructor(data, formElement) {
        this._data = data;
        this._formElement = formElement;
        this._inputElements = Array.from(formElement.querySelectorAll(data.inputSelector));
        this._buttonElement = formElement.querySelector(data.submitButtonSelector)
    }

    _invalidInput() {
        return this._inputElements.some(input => !input.validity.valid);
    }

    _showError(input, errorElement) {
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._data.errorClass);
        input.classList.add(this._data.inputErrorClass);
    }

    _hideError(input, errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove(this._data.errorClass);
        input.classList.remove(this._data.inputErrorClass);
    }

    _checkInputValidity(input) {
        const errorElement = this._formElement.querySelector(`#${input.id}-error`);
        if (!input.validity.valid) {
            this._showError(input,  errorElement);
        } else {
            this._hideError(input, errorElement);
        }
    }

    _toggleButtonState() {
        if (this._invalidInput()) {
            this._buttonElement.classList.add(this._data.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._data.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }

    _setEventListener() {
        this._inputElements.forEach((input) => {
        input.addEventListener('input', () => {
            this._checkInputValidity(input);
            this._toggleButtonState();
        });
    });

        this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
    }

    enableValidation() {
        this._toggleButtonState();
        this._setEventListener();
    }
}