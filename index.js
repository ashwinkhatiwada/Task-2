import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const riotApi = process.env.API_URL;
const baseUrl = "https://eu.api.riotgames.com/val/content/v1/contents"

const getData = async () => {
    const url = `${baseUrl}?api_key=${riotApi}`;

    try {
        const response = await axios.get(url)
            .then((res) => {
                const data = JSON.stringify(res.data);
                fs.writeFileSync("data.json", data, (err) => {
                    if (!err) {
                        console.log("Data saved")
                    }
                })
            })
    } catch (error) {
        console.error

    }



}

getData();