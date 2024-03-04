
import styles from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const handleSabmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const query = form.elements.query.value.trim().toLowerCase();
         if (query === "") {
             toast('Please entry your query');
            return;
        }
        onSubmit(query);
        form.reset();
    };

    return (
        <header className={styles['search-header']}>
            <form className={styles['search-form']} onSubmit={handleSabmit}>
                <input
                    className={styles['search-input']}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={styles['search-button']} type="submit">Search</button>
            </form>
            <Toaster position='top-center'
            containerStyle={{
            position: 'relative',
            top: 20, 
         }}/>
        </header>
        
    );
};

export default SearchBar;
