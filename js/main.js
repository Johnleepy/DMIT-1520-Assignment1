// Declare variables
const albumForm = document.querySelector('#album-form');
const albumTitle = document.querySelector('#album-title');
const albumDescription = document.querySelector('#album-description');
const albumArt = document.querySelector('#album-art');
const titleError = document.querySelector('#title-error');
const descriptionError = document.querySelector('#description-error');
const artError = document.querySelector('#art-error');
const albumList = document.querySelector('#all-albums-list');

// Add event listeners
albumTitle.addEventListener('input', onInput);
albumDescription.addEventListener('input', onInput);
albumArt.addEventListener('change', onChange);
albumForm.addEventListener('submit', onSubmit);

// Functions
function onInput(event) {
    isValidInputLength(event.currentTarget);
}

function onChange(event) {
    isNonEmptyInput(event.currentTarget);
}

function onSubmit(event) {
    event.preventDefault();
    validateInput(albumTitle);
    validateInput(albumDescription);
    validateInput(albumArt);

    if (validateInput(albumTitle) && validateInput(albumDescription) && isNonEmptyInput(albumArt)) {
        createAlbumCards();
    }
}

// Helper functions
function validateInput(input) {
    return isNonEmptyInput(input) && isValidInputLength(input);
}

function isNonEmptyInput(input) {
    return  input.value.trim().length > 0 ?
        (input.classList.add('is-valid'), input.classList.remove('is-invalid'), true) :
        (input.classList.add('is-invalid'), input.classList.remove('is-valid'), false);
}

function isValidInputLength(input) {
    let maxLength;
    input === albumTitle ? maxLength = 20 : maxLength = 40;
    return input.value.length > 0 && input.value.length <= maxLength ?
        (input.classList.add('is-valid'), input.classList.remove('is-invalid'), true) :
        (input.classList.add('is-invalid'), input.classList.remove('is-valid'), false);
}

function createAlbumCards() {
    const template =
    `<div class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="img/${albumArt.value}"/>
            <div class="card-body">
                <h5 class="card-title">${albumTitle.value}</h5>
                <p class="card-text">${albumDescription.value}</p>
            </div>
        </div>
    </div>`;

    albumList.insertAdjacentHTML('beforeend', template);
}