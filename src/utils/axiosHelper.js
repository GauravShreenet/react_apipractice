import axios from "axios";

// http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY
const urlApi = "http://gateway.marvel.com/v1/public/character/"
const apiKey = "8bd6db12d7da6f92179a087a0daafd18"

export const fetchMovie = async (url) => {
    try{
        const response = await axios.get(`${urlApi}?apikey=${apiKey}`)
        return response.data;
    }catch(error) {
        console.log(error)
    }
}