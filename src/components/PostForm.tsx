import React, { useState } from "react";
import { IPost } from "@/types/IPost";
import { IComment } from '@/types/IComment';

interface PostFormProps {
    post?: IPost
}

export default function PostForm({ post }: PostFormProps) {
    const [postData, setPostData] = useState<IPost>(post && post.id ? { ...post } : {
        id: -1,
        title: '',
        body: '',
        comments: [] as IComment[]
    });

    const createPost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('createPost');
    }

    const updatePost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('updatePost');
    }

    const changePostData = (postProperty: string) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            setPostData((prevPostData: IPost) => {
                return {
                    ...prevPostData,
                    [postProperty]: event.target.value
                }
            })
        }
    }

    return (
        <form onSubmit={post && post.id ? updatePost : createPost}>
            <input type="text" name="title" value={postData.title} onChange={() => changePostData('title')} />
            <input type="text" name="body" value={postData.body} onChange={() => changePostData('body')} />
            <input type="submit" value={post && post.id ? 'Update' : 'Create'} />
        </form>
    )
}