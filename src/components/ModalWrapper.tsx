import React from "react";
import ReactDOM from 'react-dom';
import useModal from '@/hooks/useModal';

interface ModalProps {
    children: JSX.Element,
}

export default function ModalWrapper({ children }: ModalProps) {
    const { visibility, close } = useModal();

    return ReactDOM.createPortal(
        <>
            {visibility.isVisible &&
                <div className="modal-wrapper">
                    {children}
                    <button className="modal-close" type="button" onClick={close}>X</button>
                </div>
            }
        </>
        ,
        document.getElementById('root') as HTMLElement
    )
}