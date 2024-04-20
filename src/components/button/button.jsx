import css from './button.module.css';

export const Button = ({ onClick, text }) => {
    return <button className={css.Button} onClick={onClick}>{text}</button>
}