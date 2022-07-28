import React, { useContext, useMemo } from "react";
import { ModalContext } from "@/context/ModalContext";

export default function useModal() {
    const { modals, visibility, register, unregister, open, close } = useContext(ModalContext);
    const currentModal = useMemo(() => modals[visibility.currentName], [visibility.currentName])

    return {
        currentModal,
        visibility,
        register,
        unregister,
        open,
        close
    };
}