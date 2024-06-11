import style from "../SearchBar/SearchBar.module.css";
import toast from 'react-hot-toast';
import { FormEvent } from "react";

interface SearchBarProps {
    onSubmit: (newQuery: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps): JSX.Element {
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const query = form.elements.namedItem("query") as HTMLInputElement;
        if (query.value.trim() !== "") {
            onSubmit(query.value.trim());
            form.reset();
        } else {
            toast.error("🦄 Sorry, there are no images matching your search query. 🙏Please try again!");
        }
    };

    return (
        <header>
            <form className={style.headerSearch} onSubmit={handleSubmit}>
                <input
                    className={style.inputSearch}
                    type="text"
                    name="query"
                    autoFocus
                    autoComplete="off"
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}
