import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};

const onFormSubmit = event => {
  event.preventDefault();

  const searchedText = event.target.elements['search-text'].value.trim();

  if (!searchedText) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchedText)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }

      createGallery(images);
    })
    .catch(err => {
      console.error('Error:', err);
      iziToast.error({
        title: 'Error',
        message: 'Failed to load images. Please try again.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
};

refs.form.addEventListener('submit', onFormSubmit);
