import toast, { Toaster } from 'react-hot-toast';



export default function SearchBar({onSubmit}) {

    const handleSabmit = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const query = form.elements.query.value.trim().toLowerCase();
         if (query === "") {
            toast('Please entry your query')
            return;
        }
        onSubmit (query);
        form.reset();
        
    };

    return (
        <header>
            <form onSubmit={handleSabmit}>
                <input
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" >Search</button>
            </form>
            <Toaster />
        </header>


)

}