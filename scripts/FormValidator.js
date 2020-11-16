export class FormValidator {
    constructor(data, formElements) {
        this._data = data;
        this._formElements = formElements;
        this._inputElements = Array.from(formElements.querySelectorAll(data.inputSelector));
        this._buttonElement = formElements.querySelector(data.submitButtonSelector)
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
        const errorElement = this._formElements.querySelector(`#${input.id}-error`);
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

        this._formElements.addEventListener('submit', (evt) => evt.preventDefault());
    }

    enableValidation() {
        this._toggleButtonState();
        this._setEventListener();
    }
}