import css from './modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ largeImageURL, tags, removeModalImage }) => {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                removeModalImage();
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    })

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            removeModalImage();
        }
    }

    return <div className={css.Overlay} onClick={handleBackdropClick}>
        <div className={css.Modal}>
            <img src={largeImageURL} alt={tags} />
        </div>
    </div>
}