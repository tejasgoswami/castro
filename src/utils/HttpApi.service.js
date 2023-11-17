import {
    createContext,
    useContext,
    useEffect,
    useMemo,
  } from 'react';
  import axios from 'axios';
import { useSelector } from 'react-redux';

  const HttpApiServiceContext = createContext(
    null
  );
  const BASE_URL = process.env.REACT_APP_API_URL || 'http://13.235.173.222:3000/api/v1';
  
  const getHeaders = () => {
    return {
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      },
    };
  };
  

  const handleError = (error) => {
    let errorMessage = 'Something went wrong, Please try after sometime.';
    const err = { ...error };
    console.log("err", err)
    if (err?.response?.status !== 200) {
      if (err?.response?.data?.error?.message) {
        errorMessage = err?.response?.data?.error?.message;
      } else {
        errorMessage = err?.message;
      }
    }
    return errorMessage;
  };
  
  const get = (path, header = getHeaders()) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}${path}`, header)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(handleError(error));
        });
    });
  };
  
  const post = (path, data, headers = getHeaders()) => {
    console.log("BASE_URL", BASE_URL)
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}${path}`, data, headers)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(handleError(error));
        });
    });
  };
  
  export const HttpApiServiceProvider = (props) => {
    const { children } = props;
    let dataFromApi = useSelector((state) => { return state.userData.data});

    useEffect(() => {
      axios.interceptors.request.use(async (request) => {
          request.headers['api-key'] = `Uva2/sLKA0mDpF3ziBkR7zEab5eGHi9AN62v2oHYe6w=`;

          if (!request.url?.includes('auth') && dataFromApi?.token) {
            request.headers['token'] = dataFromApi?.token;
          }
        return request;
      });
  
      axios.interceptors.response.use(
        async (res) => {
          return res;
        },
        async (err) => {
          try {
            if (
              err?.response?.data?.statusCode === 401 
            ) {
              err.config.headers = {
                ...err.config.headers,
              };
              return await axios.request(err.config);
            }
          } catch (error) {
            return Promise.reject(error);
          }
  
          return Promise.reject(err);
        }
      );
    }, []);
  
    const operationsAllowed = useMemo(
      () => ({
        get,
        post,
      }),
      []
    );
  
    return (
      <HttpApiServiceContext.Provider value={operationsAllowed}>
        {children}
      </HttpApiServiceContext.Provider>
    );
  };
  
  export const useHttpApiService = () => {
    return useContext(HttpApiServiceContext);
  };
  