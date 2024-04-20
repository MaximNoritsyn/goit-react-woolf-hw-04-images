import css from './search_bar.module.css';

export const SearchBar = ({submitSearch}) => {
  return (
      <header className={css.searchbar}>
          <form className={css.SearchForm} onSubmit={submitSearch}>
              <button type="submit" className={css.SearchFormButton} >
                  <span className={css.SearchFormButtonLabel}>Search</span>
              </button>

              <input
                  name='query'
                  className={css.SearchFormInput}
                  type="text"
                  autoComplete='off'
                  autoFocus
                  placeholder="Search images and photos"
            />
        </form>
    </header>
  );
}