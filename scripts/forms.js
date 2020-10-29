const showError = (formElements, input, item) => {
    const errorElement = formElements.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(item.inputErrorClass);
};

const hideError = (formElements, input, item) => {
    const errorElement = formElements.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(item.inputErrorClass);
}

const checkInputValidity = (formElements, input, item) => {
    if (input.checkValidity()) {
        hideError(formElements, input, item);
    } else {
        showError(formElements, input, item);
    }
}

const toggleButtonState = (formElements, buttonElement, item) => {
    if (formElements.checkValidity()) {
        buttonElement.classList.remove(item.inactiveButtonClass);
        buttonElement.disabled = false;
    } else {
        buttonElement.classList.add(item.inactiveButtonClass);
        buttonElement.disabled = true;
    }
}

const setEventListener = (formElements, item) => {
    const inputElements = Array.from(formElements.querySelectorAll(item.inputSelector));
    const buttonElement = formElements.querySelector(item.submitButtonSelector);

    inputElements.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(formElements, evt.target, item);
            toggleButtonState(formElements, buttonElement, item);
        });
    });

    toggleButtonState(formElements, buttonElement, item);
}

const enableValidation = (item) => {
    const formElements = Array.from(document.querySelectorAll(item.formSelector));

    formElements.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListener(form, item);
    });
}
