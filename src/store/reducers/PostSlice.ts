import { IPost } from "@/types/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "../action-creators/PostActions";

interface PostState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getPosts.fulfilled.type, (state: PostState, action: PayloadAction<IPost[]>) => {
                state.isLoading = false;
                state.error = '';
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected.type, (state: PostState, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
                state.posts = [];
            })
            .addCase(getPosts.pending.type, (state: PostState) => {
                state.isLoading = true;
            })
    },
});

export default postSlice.reducer;