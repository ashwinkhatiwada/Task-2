import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const riotApi = process.env.API_URL;
const baseUrl = "https://eu.api.riotgames.com/val/content/v1/contents"

const getData = async () => {
    const url = `${baseUrl}?api_key=${riotApi}`;

    try {
        const response = await axios.get(url)
            .then((res) => {
                const data = JSON.stringify(res.data);
                console.log(data);
            })
    } catch (error) {
        console.error

    }



}

getData();