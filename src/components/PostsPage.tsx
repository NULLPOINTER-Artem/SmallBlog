import useModal from "@/hooks/useModal";
import React, { useEffect } from "react";
import PostForm from "@/components/PostForm";
import Modal from "@/components/Modal";

export default function PostsPage() {
    const { open, close, register, unregister, currentModal } = useModal();

    useEffect(() => {
        register({
            name: 'post_form',
            component: <PostForm />,
            props: {}
        });

        return () => {
            unregister('post_form');
        }
    }, []);

    return (
        <>
            <h1>Posts Page!</h1>
            <button type="button" onClick={() => open('post_form')}>Open modal</button>
            <button type="button" onClick={close}>Close modal</button>
            <Modal>
                {currentModal && React.cloneElement(currentModal.component, { ...currentModal.props })}
            </Modal>
        </>
    )
}