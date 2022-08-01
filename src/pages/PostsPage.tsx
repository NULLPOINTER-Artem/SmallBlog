import useModal from "@/hooks/useModal";
import React, { useEffect } from "react";
import PostForm from "@/components/PostForm";
import ModalWrapper from "@/components/ModalWrapper";
import { useAppSelector } from "@/hooks/redux";
import List from "@/components/List";
import { IPost } from "@/types/IPost";
import PostItem from "@/components/PostItem";
import { useActions } from "@/hooks/useActions";

export default function PostsPage() {
    const { open, close, register, unregister, currentModal } = useModal();
    const { posts, isLoading, error } = useAppSelector(state => state.postReducer);
    const { getPosts } = useActions();

    useEffect(() => {
        register({
            name: 'post_form',
            component: <PostForm />,
            props: {}
        });

        getPosts();

        return () => {
            unregister('post_form');
        }
    }, []);

    return (
        <>
            {isLoading && <h1>Is Loading...</h1>}
            {error && <h1>{error}</h1>}
            <h1>Posts Page!</h1>
            <List
                items={posts}
                renderItemCB={(post: IPost) => <PostItem post={post} key={post.id} />}
            />
            <button type="button" onClick={() => open('post_form')}>Open modal</button>
            <button type="button" onClick={close}>Close modal</button>
            <ModalWrapper>
                {currentModal && React.cloneElement(currentModal.component, { ...currentModal.props })}
            </ModalWrapper>
        </>
    )
}