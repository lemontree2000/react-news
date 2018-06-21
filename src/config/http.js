import Axios from 'axios';


const createHttpQuest = (type) => {
    let baseURL;
    if (type === 'mock') {
        baseURL = 'https://www.easy-mock.com/mock/5b266750f9ce662e6c371c68/news';
    } else {
        baseURL = '';
    }
    return Axios.create({
        baseURL
    })
}

export default createHttpQuest;