import styles from './MovieCard.module.css';

export function MovieCard({movie}) {
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img className={styles.movieImage} width={230} height={345} src={imageURL} alt={movie.title} />
            <div>{movie.title}</div>
            </li>
    );
}