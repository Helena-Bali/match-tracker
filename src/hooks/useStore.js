import { useSelector } from 'react-redux';

export const useMatches = () => {
    return useSelector((state) => state.dataSlice.matches);
};

export const useStore = () => {
    return useSelector((state) => state.dataSlice);
};
