import { IPost } from "@/types/IPost";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const BASE_API_URL = 'https://bloggy-api.herokuapp.com';

export const getPosts = createAsyncThunk(
    'post/getPosts',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get<IPost[]>(`${BASE_API_URL}/posts`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('App can not upload posts');
        }
    }
);

export const createPost = createAsyncThunk(
    'post/createPost',
    async (body: Omit<IPost, 'id'>, thunkAPI) => {
        try {
            const { data } = await axios.post<IPost>(`${BASE_API_URL}/posts`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('App can not create new post');
        }
    }
);

export const getPostByID = createAsyncThunk(
    'post/getPostByID',
    async (body: Omit<IPost, 'title' | 'body'>, thunkAPI) => {
        try {
            const { id } = body;
            const { data } = await axios.get<IPost>(`${BASE_API_URL}/posts/${id}?_embed=comments`);

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('App can not get a post by id');
        }
    }
);

export const updatePostByID = createAsyncThunk(
    'post/updatePostByID',
    async (body: IPost, thunkAPI) => {
        try {
            const { id, body: content, title } = body;
            const { data } = await axios.put<IPost>(`${BASE_API_URL}/posts/${id}`, {
                content,
                title
            });

            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue('App can not update the post by ID');
        }
    }
);

export const deletePostByID = createAsyncThunk(
    'post/deletePostByID',
    async (body: Omit<IPost, 'title' | 'body'>, thunkAPI) => {
        try {
            const { id } = body;
            await axios.delete(`${BASE_API_URL}/posts/${id}`);

            return body;
        } catch (e) {
            return thunkAPI.rejectWithValue('App can not delete the post by ID');
        }
    }
);