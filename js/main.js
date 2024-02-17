// Ddeclare variables
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
    validateInput(event.currentTarget);
}

function onChange(event) {
    validateEmptyInput(event.currentTarget);
}

function onSubmit(event) {
    event.preventDefault();
    validateInput(albumTitle);
    validateInput(albumDescription);
    validateInput(albumArt);

    if (validateInput(albumTitle) && validateInput(albumDescription) && validateEmptyInput(albumArt)) {
        createAlbumCards();
    }
}

function validateInput(input) {
    return validateEmptyInput(input) && validateInputLength(input)
}

function validateEmptyInput(input) {
    return input.value !== '' ?
        (input.classList.add('is-valid'), input.classList.remove('is-invalid'), true) :
        (input.classList.add('is-invalid'), input.classList.remove('is-valid'), false);
}

function validateInputLength(input) {
    let maxLength;
    input === albumTitle ? maxLength = 20 : maxLength = 40;
    return input.value.length <= maxLength ?
        (input.classList.add('is-valid'), input.classList.remove('is-invalid'), true) :
        (input.classList.add('is-invalid'), input.classList.remove('is-valid'), false);
}

function createAlbumCards() {
    const albumCard = document.createElement('div');
    const titleAndDescription = document.createElement('div');
    const albumImage = document.createElement('img');
    const title = document.createElement('h2');
    const description = document.createElement('p');

    // append albumCard to albumList
    albumList.appendChild(albumCard);

    // set background image and append title-and-description banner
    albumCard.style.backgroundImage = 'url("img/' + albumArt.value + '")';
    albumCard.classList.add('album-card');
    albumCard.appendChild(titleAndDescription);

    // styling background image
    albumImage.alt = 'album art';
    albumImage.src = "img/" + albumArt.value;
    albumImage.classList.add('card-img-top');

    // styling title and description
    titleAndDescription.classList.add('title-and-description');
    titleAndDescription.appendChild(title);
    titleAndDescription.appendChild(description);

    // assign values to title and description and set font size
    title.textContent = albumTitle.value;
    description.textContent = albumDescription.value;
}