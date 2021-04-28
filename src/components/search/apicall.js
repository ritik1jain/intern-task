import axios from 'axios';
import key from '../../key';

export default async function Apicall(data,setData) {
    const api_key = key.api_key;
    const query = data.keyword;
    const api = axios.create({baseURL : key.base_url});
    try {
        const getMovies = await api.get("/search/movie", {params: {api_key,query,include_adult:false}});
        setData({...data, info: getMovies.data.results, success:true})
        console.log(getMovies.data.results);
        
    }
    catch(err) {
        console.error(err);
    }
        
    
}