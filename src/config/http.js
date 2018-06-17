import Axios from 'axios';




const HttpRequest = Axios.create({
    baseURL: 'https://www.easy-mock.com/mock/5b266750f9ce662e6c371c68/news'
});


export default HttpRequest;