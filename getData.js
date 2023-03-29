import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const riotApi = process.env.API_URL;
const baseUrl = "https://eu.api.riotgames.com/val/content/v1/contents"

let datas;
const getData = async () => {
    const url = `${baseUrl}?api_key=${riotApi}`;
    try {
        const response = await axios.get(url)

        if (res.status === 429) {               // if api exceeds the limit, read the data from the file
            const readData = JSON.parse(fs.readFileSync("output.json"));
            datas = readData;
            return
        }
        else if (res.status === 200) {
            datas = (res.data);
            return
        }
        else {
            console.log("Someting went wrong! Please try again later.");
        }

    } catch (error) {
        console.error;
    }
}
getData();

export default datas;