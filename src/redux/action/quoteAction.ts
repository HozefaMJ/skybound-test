import axios from "axios";
import { QUOTE_LIST_FAIL, QUOTE_LIST_REQUEST, QUOTE_LIST_SUCCESS } from "../constants/quoteConstants";

export const listQuotes = () => async (dispatch:any) => {
    try {
        dispatch({
            type: QUOTE_LIST_REQUEST
        })

        const category = "Inspire"

        const {data} = await axios.get(`https://qodapi.azurewebsites.net/api/Categories`)

        console.log(data)

        dispatch({
            type: QUOTE_LIST_SUCCESS,
            payload: data
        })
    } catch (error:any){
        dispatch({
            type: QUOTE_LIST_FAIL,
            payload: error.message
        })
    }
}
