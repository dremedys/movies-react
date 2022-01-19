import {FC, useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroller";
import {getMovieListAPI} from "../../services/movie.service";
import {IFilmPreview} from "../../shared/model.interfaces";
import styles from './MovieList.module.css'
import {FilmPreviewCard} from "../../components/FilmPreviewCard/FilmPreviewCard";
import {CircularProgress, Grid} from "@mui/material";

export const MovieList:FC = () => {

    const [movies, setMovies] = useState<IFilmPreview[]>([])
    const [totalPageCount,setTotalPageCount] = useState(0);
    const [loadedPages, setLoadedPages] = useState(0)

    useEffect(() => {
        getMovieListAPI(0).then(res => {
            const {results,total_pages } = res.data
            setMovies(results)
            setTotalPageCount(total_pages);
            setLoadedPages(loadedPages+1)
        })
    },[])

    const loadMore = (pageNum: number) => {
        getMovieListAPI(pageNum).then(res => {
            const {results} = res.data
            setMovies(movies.concat(results))
            setLoadedPages(loadedPages+1)
        })
    }

    return (
        <div className='container'>
            <div className={styles.movie_list}>
                <InfiniteScroll
                    loadMore={loadMore}
                    hasMore={loadedPages < totalPageCount}
                    loader={<CircularProgress color='secondary' size='large'/>}
                >
                    <Grid container
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={6}
                          padding={5}
                    >
                        {movies.map((movie,idx) => {
                            return (
                                <Grid item xl={3} key={movie.id}>
                                    <FilmPreviewCard film={movie}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </InfiniteScroll>
            </div>
        </div>
    )
}
