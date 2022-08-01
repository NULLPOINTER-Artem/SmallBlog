import { IPost } from '@/types/IPost';
import React from 'react';

interface PostItemProps {
    post: IPost,
}

export default function PostItem({ post }: PostItemProps) {
    return (
        <>
            <h3>#{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </>
    )
}