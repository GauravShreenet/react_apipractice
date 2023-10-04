import axios from "axios";
import { MD5 } from "crypto-js";

// http://gateway.marvel.com/v1/public/comics?apikey=yourAPIKEY
const getHash = (ts, secretKey, publicKey) => {
    return MD5(ts + secretKey + publicKey).toString();
}

const urlApi = "http://gateway.marvel.com/v1/public/characters"
const apiKey = "8bd6db12d7da6f92179a087a0daafd18"
const privateKey = "1585c804259bad1446b797db16e6f5de34ca58a1"
let ts = Date.now().toString();
let hash = getHash(ts, privateKey, apiKey);

export const fetchMovie = async (name) => {
    try{
        const response = await axios.get(`${urlApi}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`)
        
        if (response.data && response.data.data && response.data.data.results){
            const results = response.data.data.results;
            console.log(results);
            return results;
        }else {
                throw new Error("No results found")
        }
       

        // if (data && data.result && data.result.length > 0) {
        //     console.log(data.result)
        //     return data.result;
        // }else {
        //     throw new Error("No results found")
        // }

        
    }catch(error) {
        console.log(error)
    }
}