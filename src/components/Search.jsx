import { useEffect, useState } from "react";
import styles from './Search.module.css';
import { useQuery} from '../hooks/useQuery';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

export function Search() {
    const [searchText, setSearchText] = useState('');
    const history = useNavigate();

    const query = useQuery();
    const search = query.get("search");
  
    useEffect(() => {
        setSearchText(search || '');
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText);
        history("/?search=" + searchText);
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.searchImput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search" />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}
