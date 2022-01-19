import {FC} from "react";
import {IFilmPreview} from "../../shared/model.interfaces";
import { Rating} from "@mui/material";
import styles from './FilmPreviewCard.module.css'
import { Link } from "react-router-dom";


interface Props {
    film: IFilmPreview
}

export const FilmPreviewCard:FC<Props> = ({film}) => {
    return (
            <Link
                to={`/movies/${film.id}`}
                className={styles.preview_card}
            >
                <img
                    src={'http://image.tmdb.org/t/p/w500' + film.poster_path}
                />
                <div className={styles.preview_card__text}>
                    <h3 className={styles.preview_card__title}>{film.title}</h3>
                    <h2 className={styles.preview_card__date}>{film.release_date}</h2>
                    <Rating
                        value={film.vote_average/2}
                        size='small'
                        precision={0.1}
                    />
                </div>
            </Link>
    )
}
