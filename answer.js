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
albumTitle.addEventListener('input', onInputTitle);
albumDescription.addEventListener('input', onInputDescription);
albumArt.addEventListener('change', onChangeArt);
albumForm.addEventListener('submit', onSubmit);

// Functions
function onInputTitle(event) {
    if (event.currentTarget.value.length > 20) {
        titleError.style.display = 'block';
        event.preventDefault();
    } else {
        titleError.style.display = 'none';
        albumTitle.classList.remove('border-danger');
    }
}

function onInputDescription(event) {
    if (event.currentTarget.value.length > 40) {
        descriptionError.style.display = 'block';
        event.preventDefault();
    } else {
        descriptionError.style.display = 'none';
        albumDescription.classList.remove('border-danger');
    }
}

function onChangeArt(event) {
    if (event.currentTarget.value === '') {
        artError.style.display = 'block';
        event.preventDefault();
    } else {
        artError.style.display = 'none';
        albumArt.classList.remove('border-danger');
    }
}

function onSubmit(event) {
    event.preventDefault();
    if (validateEmptyInput(albumTitle) && validateEmptyInput(albumDescription) && validateEmptyInput(albumArt)) {
        createAlbumCards();
    }
}

function validateEmptyInput(validate) {
    if (validate !== null && validate.value !== '') {
        validate.classList.add('is-valid');
        validate.classList.remove('is-invalid');
        return true;
    } else {
        validate.classList.add('is-invalid');
        validate.classList.remove('is-valid');
        return false;
    }
}

function createAlbumCards() {
    const albumCard = document.createElement('div');
    const titleAndDescription = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h5');
    const description = document.createElement('p');

    // styling albumList and append child
    albumList.style.display = 'flex';
    albumList.style.flexDirection = 'row';
    albumList.style.flexWrap = 'wrap';
    albumList.style.gap = '5%';
    albumList.style.alignItems = 'center';
    albumList.style.margin = '0 auto';
    albumList.appendChild(albumCard);

    // styling img
    img.alt = 'album art';
    img.src = "img/" + albumArt.value;
    img.style.width = '100%';
    img.style.maxHeight = '30vh';

    // styling albumCard and append children
    albumCard.style.width = '30%';
    albumCard.style.height = '30vh';
    albumCard.style.marginBottom = '5%';
    albumCard.style.backgroundImage = 'url("img/' + albumArt.value + '")';
    albumCard.style.backgroundSize = 'cover';
    albumCard.style.backgroundPosition = 'center';
    albumCard.style.backgroundRepeat = 'no-repeat';
    albumCard.style.paddingTop = 'calc(30vh - 70.5px)';
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