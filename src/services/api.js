const API_URL = import.meta.env.VITE_API_URL;

export const getGallery = async () => {

    const response = await fetch(`${API_URL}/gallery`);

    const data = await response.json();

    return data;

};

export const getPortfolio = async () => {

    const response = await fetch(`${API_URL}/portfolio`);

    const data = await response.json();

    return data;

};