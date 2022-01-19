import {IFilmPreview} from "./model.interfaces";



export interface getMovieListResponseBody {
    page: number,
    results: IFilmPreview[],
    total_pages: number
}
