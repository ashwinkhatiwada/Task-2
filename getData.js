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
            .then((res) => {

                if (res.status === 429) {               // if api exceeds the limit, read the data from the file
                    const readData = JSON.parse(fs.readFileSync("output.json"));
                    datas = readData;
                    return
                }
                else {
                    datas = (res.data);
                    return
                }
            })
    } catch (error) {
        console.error
    }
}
await getData();

export default datas;