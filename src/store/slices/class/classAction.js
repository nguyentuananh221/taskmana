import { createAsyncThunk } from "@reduxjs/toolkit"
import classServices from "../../../services/classServices"
export const getClassByMentor = createAsyncThunk(
    'class/getClassByMentor',
    async (data,thunkAPI) => {
        const {userID} = data
        const respone = await classServices.getClassbyMentor(userID)
        return respone
    }
)

