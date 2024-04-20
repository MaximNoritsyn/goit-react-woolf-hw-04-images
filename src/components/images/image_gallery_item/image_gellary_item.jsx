import css from './image_gallery_item.module.css';

export const ImageGalleryItem = ({ image, setModalImage }) => {
    return <li className={css.ImageGalleryItem}>
        <img src={image.webformatURL} alt={image.tags} className={css.ImageGalleryItemImage} onClick={()=>setModalImage(image)} />
    </li>
}