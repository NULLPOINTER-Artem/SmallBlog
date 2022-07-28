import React from "react";
import { TModalVisibility } from '@/types/modal/types';
import { IModal } from '@/types/modal/interfaces';

interface IModalContext {
    modals: Record<string, IModal>;
    visibility: TModalVisibility;
    register: ({ }: Required<IModal>) => void;
    unregister: (name: string) => void;
    open: (name: string) => void;
    close: () => void;
}

export const ModalContext = React.createContext<IModalContext>({
    modals: {},
    visibility: {
        isVisible: false,
        currentName: ''
    },
    register: () => { },
    unregister: () => { },
    open: () => { },
    close: () => { }
});