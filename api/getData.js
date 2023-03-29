import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const riotApi = process.env.API_KEY;
const baseUrl = "https://eu.api.riotgames.com/val/content/v1/contents"

const getData = async () => {
    let datas;
    const url = `https://eu.api.riotgames.com/val/content/v1/contents?api_key=RGAPI-265f05c9-b04a-4111-bad1-d127cf7fdf11`;
    try {
        const response = await axios.get(url)
        console.log(response.status)

        if (response.status === 200) {               // if api is working, write the data to the file
            datas = await response.data;
            return datas
        }

        else if (response.status === 429) {               // if api exceeds the limit, read the data from the file
            const readData = JSON.parse(fs.readFileSync("output.json"));
            datas = readData;
            return datas
        }
        else {
            console.error
        }
    } catch (error) {
        console.error
    }
}
const data = await getData();
export default data;
