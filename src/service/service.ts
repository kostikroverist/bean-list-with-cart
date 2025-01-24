import axios from 'axios';

const BASE_URL = 'https://jellybellywikiapi.onrender.com/api/Beans';

export const getData = async (url: string = BASE_URL) => {
    try {
        const response = await axios.get(url);
        return response.data; // Повертаємо тільки дані
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Проброс помилки, щоб обробити її в іншому місці
    }
};


export const getDataById = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Проброс помилки, щоб обробити її в іншому місці
    }
}