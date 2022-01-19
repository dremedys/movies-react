import {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {getMovieDetails, getSimilarMovies} from "../../services/movie.service";
import {IFilmDetails, IFilmPreview} from "../../shared/model.interfaces";
import styles from './MovieDetails.module.css'
import {Grid, Rating} from "@mui/material";
import {AccessTime,  Theaters} from "@mui/icons-material";
import {FilmPreviewCard} from "../../components/FilmPreviewCard/FilmPreviewCard";


export const MovieDetails:FC = () => {
    const {id} = useParams<{id: string}>();
    const [movie, setMovie] = useState<IFilmDetails>();
    const [similarMovies, setSimilarMovies] = useState<IFilmPreview[]>([]);

    useEffect(() => {
            getMovieDetails(id || '').then((res) => {
                const movie = res.data;
                setMovie(movie);

                getSimilarMovies(id || '').then(res => {
                    const {results} = res.data
                    setSimilarMovies(results);
                })
            })

    },[id])

    return (
        <div>
            <div className={styles.main_info} style={{background:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
                <div className="container">
                    <div className={styles.main_info__inner}>

                        <img className={styles.main_info__poster} src={'http://image.tmdb.org/t/p/original' +movie?.poster_path} alt='poster'/>
                        <div>
                            <h2 className={styles.main_info__title}>{movie?.title}</h2>
                            <div>
                                {movie?.genres.map(genre => genre.name).join(' | ')}
                            </div>
                            <div className={styles.main_info__release}>
                                <Theaters/> {movie?.release_date}
                            </div>
                            <div className={styles.main_info__time}>
                               <AccessTime/> {movie?.runtime} min
                            </div>
                            <div className={styles.main_info__overview}>
                                <h2>Overview</h2>
                                <p>
                                    {movie?.overview}
                                </p>
                            </div>
                            <div className={styles.rating}>
                                <h3>Rating</h3>
                                {movie &&  <Rating  size='large' value={movie?.vote_average/2}/>}
                                <p>Voted by {movie?.vote_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.similar}>
                    <h1 className={styles.similar__title}>Similar</h1>
                    <Grid container spacing={4}>
                        {similarMovies.slice(0,6).map(movie => (
                            <Grid item xl={2}>
                                <FilmPreviewCard film={movie}/>
                            </Grid> )
                        )}
                    </Grid>
                </div>
            </div>
        </div>
    )
}
