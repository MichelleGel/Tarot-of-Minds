import axios from "axios";

const API_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

export const getAllCards = async () => {
    try{
        const response = await axios.get(`${API_URL}`);
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

export const getOneCardById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching card:', error);
        throw error;
    }
};
