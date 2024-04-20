import css from './image_gallery.module.css';
import { ImageGalleryItem } from '../image_gallery_item/image_gellary_item';

export const ImageGallery = ({ images, setModalImage }) => {
    return <ul className={css.ImageGallery}>
        {images.map((image) => <ImageGalleryItem key={image.id} image={image} setModalImage={setModalImage} />)}
    </ul>
}