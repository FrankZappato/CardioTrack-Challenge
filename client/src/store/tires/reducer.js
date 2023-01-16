import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTires } from "../../api";


const tires = createAction('tires/load');

const initialState = {
    size: '',
    brand: '',
    model: '',
    loading: false,
    error: ''
};

const slice = createSlice({
    initialState,
    name: 'tires',
    reducers: {
        getTiresSetLoading: (state, action) => ({
            ...state,
            loading: action.payload
        }),
        getTiresSuccess: (state, action) => ({
            ...state,
            ...action.payload,
            loading: false
        }),
        getTiresError: (state, action) => ({
            ...state,
            error: action.payload,
            loading: false
        })

    }
});

const { name, actions, reducer } = slice;

const getAllTires = createAsyncThunk(tires.type, async (payload, thunksapi) => {
    try {
        thunksapi.dispatch(actions.getTiresSetLoading(true));
        const response = await getTires();

        if (!response.status) {
            thunksapi.dispatch(actions.getTiresError(response.data));
        } else {
            thunksapi.dispatch(actions.getTiresSuccess(response.data));
        }

    } catch (error) {
        console.log(error.message);
        thunksapi.dispatch(actions.getTiresError(error.message));
    }
});

export { actions, name, reducer, getAllTires };
