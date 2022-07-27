import React from "react";
import ReactDOM from 'react-dom';

interface ModalProps {
    children: JSX.Element,
}

export default function Modal({ children }: ModalProps) {
    return ReactDOM.createPortal(
        <>
            {children}
        </>,
        document.getElementById('root') as HTMLElement
    )
}