const API_URL = "http://localhost:3000";

export const getGallery = async () => {
    const response = await fetch (`${API_URL}/gallery`);

    const data = await response.json();

    console.log(data);

    return data;
};