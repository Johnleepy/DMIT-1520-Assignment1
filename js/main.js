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

function validateInput(validate) {
    return validateEmptyInput(validate) && validateInputLength(validate)
}

function validateEmptyInput(validate) {
    return validate.value !== '' ?
        (validate.classList.add('is-valid'), validate.classList.remove('is-invalid'), true) :
        (validate.classList.add('is-invalid'), validate.classList.remove('is-valid'), false);
}

function validateInputLength(validate) {
    let maxLength;
    validate === albumTitle ? maxLength = 20 : maxLength = 40;
    return validate.value.length <= maxLength ?
        (validate.classList.add('is-valid'), validate.classList.remove('is-invalid'), true) :
        (validate.classList.add('is-invalid'), validate.classList.remove('is-valid'), false);
}

function createAlbumCards() {
    const albumCard = document.createElement('div');
    const titleAndDescription = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h5');
    const description = document.createElement('p');

    // styling albumList and append child
    albumList.appendChild(albumCard);

    // styling img
    img.alt = 'album art';
    img.src = "img/" + albumArt.value;
    img.style.width = '100%';
    img.style.maxHeight = '30vh';

    // styling albumCard and append children
    // albumCard.style.width = '30%';
    // albumCard.style.height = '30vh';
    // albumCard.style.marginBottom = '5%';
    albumCard.style.backgroundImage = 'url("img/' + albumArt.value + '")';
    // albumCard.style.backgroundSize = 'cover';
    // albumCard.style.backgroundPosition = 'center';
    // albumCard.style.backgroundRepeat = 'no-repeat';
    // albumCard.style.paddingTop = 'calc(30vh - 70.5px)';
    albumCard.appendChild(titleAndDescription);

    // styling title and description
    titleAndDescription.style.display = 'flex';
    titleAndDescription.style.flexDirection = 'column';
    titleAndDescription.style.justifyContent = 'space-between';
    titleAndDescription.style.color = 'black';
    titleAndDescription.style.backgroundColor = 'white';
    titleAndDescription.appendChild(title);
    titleAndDescription.appendChild(description);

    // assign values to title and description and set font size
    title.textContent = albumTitle.value;
    title.style.fontSize = '20px';
    description.textContent = albumDescription.value;
    description.style.fontSize = '15px';
}