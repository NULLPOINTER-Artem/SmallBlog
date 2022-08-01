import { useAppDispatch } from "./redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import ActionCreators from '@/store/action-creators';

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}