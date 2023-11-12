import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
    if(error.message === "Network Error"){
        return  Promise.reject(new Error("Erro de conexao."))
    }
    return Promise.reject(error)
};
