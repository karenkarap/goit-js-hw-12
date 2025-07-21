import SimpleLightbox from 'simplelightbox';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.js-loader'),
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// TODO: Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї,
// TODO: додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh().
// TODO: Нічого не повертає.

export const createGallery = images => {
  const createdCard = images
    .map(
      ({
        webformatURL: preview,
        largeImageURL: original,
        tags: description,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item">
            <div class="card"> 
                <a class="gallery-link" href="${original}">
                    <img class="gallery-image" src="${preview}" alt="${description}" />
                </a>
                <div class="info">
                    <div class="info-row labels">
                        <p>Likes</p>
                        <p>Views</p>
                        <p>Comments</p>
                        <p>Downloads</p>
                    </div>
                    <div class="info-row values">
                        <p>${likes}</p>
                        <p>${views}</p>
                        <p>${comments}</p>
                        <p>${downloads}</p>
                    </div>
                </div>
            </div>
        </li>
            `;
      }
    )
    .join('');

  refs.gallery.innerHTML = createdCard;

  lightbox.refresh();
};

// TODO: Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.

export const clearGallery = () => {
  refs.gallery.innerHTML = '';
};

// TODO: Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.

export const showLoader = () => {
  refs.loader.classList.remove('is-hidden');
};

// TODO: Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

export const hideLoader = () => {
  refs.loader.classList.add('is-hidden');
};
