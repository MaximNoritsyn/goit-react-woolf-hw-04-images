import css from './app.module.css';
import { searchImages } from '../services/pixabay';

import { SearchBar } from './search_bar/search_bar';
import { ImageGallery } from './images/image_gallery/image_gallery';
import { Button } from './button/button';
import { Loader } from './loader/loader';
import { Modal } from './modal/modal';

import { useState, useEffect } from 'react';

export const App = () => {

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [canLoadMore, setCanLoadMore] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    setQuery(query);
    setPage(1);
    setImages([]);
  }

  const removeModalImage = () => {
    setModalImage(null);
  }

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const { hits, canLoadMore } = await searchImages(query, page)
        setImages((prevImages) => [...prevImages, ...hits]);
        setCanLoadMore(canLoadMore);
      }
      catch (error) {
        alert(error.message)
      }
      finally {
        setLoading(false);
      }
    }

    if (query) {
      loadImages()
    }
  }, [query, page])

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  }

  return <div className={css.app}>
    <SearchBar submitSearch={submitSearch} />
    <ImageGallery images={images} setModalImage={setModalImage} />
    <Loader visible={loading} />
    { modalImage && <Modal {...modalImage} removeModalImage={removeModalImage} />}
    { canLoadMore && images && <Button onClick={nextPage} text="Load more" />}
  </div>
};
