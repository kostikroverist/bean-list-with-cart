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
