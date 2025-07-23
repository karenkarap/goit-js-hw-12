import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  button: document.querySelector('.js-button-more'),
};

let page = 1;
const perPage = 15;
let totalPages = null;
let searchedText = null;

const onLoadMore = async event => {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(searchedText, page, perPage);

    const images = data.hits;

    createGallery(images);

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2 + 16,
      behavior: 'smooth',
    });

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      refs.button.removeEventListener('click', onLoadMore);
    } else {
      showLoadMoreButton();
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

const onFormSubmit = async event => {
  event.preventDefault();
  hideLoadMoreButton();
  refs.button.removeEventListener('click', onLoadMore);

  searchedText = event.target.elements['search-text'].value.trim();

  if (!searchedText) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  page = 1;
  showLoader();

  try {
    const data = await getImagesByQuery(searchedText, page, perPage);
    const images = data.hits;
    totalPages = Math.ceil(data.totalHits / perPage);

    if (images.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(images);
    if (totalPages > 1) {
      refs.button.addEventListener('click', onLoadMore);
      showLoadMoreButton();
    }

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (err) {
    console.error('Error:', err);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
};

refs.form.addEventListener('submit', onFormSubmit);
