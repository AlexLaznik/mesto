export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._data = {
            popupOpenClass: 'popup_opened',
            escClass: 'Escape'
        };
    }

    open() {
        this._popupSelector.classList.add(this._data.popupOpenClass);
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        this._popupSelector.addEventListener('click', this._handleOverlayClose.bind(this));
    }

    close() {
        this._popupSelector.classList.remove(this._data.popupOpenClass);
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        this._popupSelector.removeEventListener('click', this._handleOverlayClose.bind(this));
    }

    _handleOverlayClose(evt) {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _handleEscClose(evt) {
        if (evt.key === this._data.escClass) {
            this.close();
        }
    }

    setEventListeners() {
        const closeButton = this._popupSelector.querySelector('.popup__close-button');
        closeButton.addEventListener('click', this.close.bind(this));
    }
}