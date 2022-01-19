import axios from "axios";
import {getMovieListResponseBody} from "../shared/common.interfaces";
import {IFilmDetails} from "../shared/model.interfaces";

export const API_URL = 'https://api.themoviedb.org/3'
const api_key = '64dd5fbe2a0241ba5b8c174482243af2'

export const getMovieListAPI = async (page:number) => {
    page++
    return axios.get<getMovieListResponseBody>(`${API_URL}/movie/popular`, {
        params:{
            page,
            api_key
        }
    })
}

export const getMovieDetails = async (id:string) => {
    return axios.get<IFilmDetails>(`${API_URL}/movie/${id}`, {
        params:{
            api_key
        }
    })
}

export const getSimilarMovies = async (id:string) => {
    return axios.get<getMovieListResponseBody>(`${API_URL}/movie/${id}/similar`, {
        params:{
            api_key
        }
    })
}
