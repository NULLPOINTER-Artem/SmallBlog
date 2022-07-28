import React, { useState } from 'react';
import { ModalContext } from '@/context/ModalContext';
import { IModal } from '@/types/modal/interfaces';
import { TModalVisibility } from '@/types/modal/types';

type TModalComponentProps = {
    children: React.ReactNode
};

export default function ModalComponent({ children }: TModalComponentProps) {
    const [modals, setModals] = useState<Record<string, IModal>>({});
    const [visibility, setVisibility] = useState<TModalVisibility>({
        isVisible: false,
        currentName: ''
    });

    const register = ({ name, component, props }: Required<IModal>) => {
        setModals((prevModals) => {
            return {
                ...prevModals,
                [name]: {
                    component,
                    props
                }
            }
        });
    }

    const unregister = (name: string) => {
        setModals((prevModals) => {
            const copyOfModals = { ...prevModals };

            delete copyOfModals[name];

            return copyOfModals;
        });
    }

    const open = (name: string) => {
        setVisibility({ currentName: name, isVisible: true });
    }

    const close = () => {
        setVisibility((prevVisibility) => {
            return {
                ...prevVisibility,
                isVisible: false
            }
        });
    }

    return (
        <ModalContext.Provider value={{
            modals,
            visibility,
            register,
            unregister,
            open,
            close
        }}>
            {children}
        </ModalContext.Provider>
    )
}