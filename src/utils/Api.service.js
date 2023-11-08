import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
} from 'react';
import { useHttpApiService } from './HttpApi.service';

const APIURL = {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    PRODUCTS: '/product/allproducts'
}

const ApiServiceContext = createContext(null);

export const APIServiceProvider = (props) => {
    const httpApiService = useHttpApiService();
    const { children } = props;


    const signup = useCallback(
        (data) => {
            return httpApiService?.post(APIURL.SIGNUP, data);
        },
        [httpApiService]
    );

    const login = useCallback(
        (data) => {
            return httpApiService?.post(APIURL.LOGIN, data);
        },
        [httpApiService]
    );

    const getProducts = useCallback(
        (data) => {
            return httpApiService?.get(APIURL.PRODUCTS);
        },
        [httpApiService]
    );
    const operationsAllowed = useMemo(
        () => ({
            signup,
            getProducts,
            login
        }),
        [signup,
            getProducts,
            login]
    );

    return (
        <ApiServiceContext.Provider value={operationsAllowed}>
            {children}
        </ApiServiceContext.Provider>
    );
};

export const useApiService = () => {
    return useContext(ApiServiceContext);
};
