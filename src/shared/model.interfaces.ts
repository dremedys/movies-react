export interface IFilmPreview {
    poster_path: string,
    adult: string,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language:string,
    title:string,
    backdrop_path:string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number
}

export interface IFilmDetails extends IFilmPreview{
    belongs_to_collection: null | object,
    backdrop_path: string,
    budget: number,
    genres:{id:number,name:string}[],
    homepage: string | null,
    imdb_id: number,
    runtime: number | null,
    status: string,
    vote_count: number,
}
