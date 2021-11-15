import { DrinksEntity } from "../models/drinks";
import axios from "axios";

const baseUrl = "http://localhost:5001/cocktails-56d34/us-central1/api";
// const baseUrl = process.env.REACT_APP_API_URL;


if (!baseUrl) {
    console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function getFavorites():Promise<DrinksEntity[]>{
    return axios.get<DrinksEntity[]>(`${baseUrl}/favorites`)
    .then(res => res.data);
}