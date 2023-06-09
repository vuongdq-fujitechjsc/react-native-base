import axios, { AxiosError, AxiosResponse } from "axios";

import { APIConstants } from "src/constants/apiContant";
import { IAPIResponse } from "../models/IAPIResponse";

class APIService {
    axiosInstance = axios.create({
        baseURL: APIConstants.BASE_URL,
        timeout: APIConstants.TIMEOUT,
        headers: {
            'Content-Type': APIConstants.HEADER_APPLICATION_JSON,
        }
    });

    constructor() {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                const accessToken = '';
                if (accessToken != null) {
                    config.headers.Authorization = accessToken;
                }
                return config;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            // async (error: AxiosError) => {
            //     const originalConfig = error.config;

            //     // access token was expired
            //     if (error.response && error.response.status === 401) {
            //         try {
            //             // const refresh = await this.post('/api/auth/token/refresh', {
            //             //     refresh_token: appStore.getState().auth.currentUser?.refresh_token
            //             // });

            //             appStore.dispatch(
            //                 authActions.refreshToken({
            //                     refresh_token: appStore.getState().auth.currentUser?.refresh_token,
            //                 })
            //             );

            //             // const { accessToken, refreshToken } = refresh.data;
            //             // this.setToken(accessToken, refreshToken);

            //             return this.axiosInstance(originalConfig);
            //         } catch (error) {
            //             return Promise.reject(error);
            //         }
            //     }

            //     return Promise.reject(error);
            // }
        )
    }

    handleResponse<T>(data: any) {
        let response: IAPIResponse<T> = {
            isSuccess: true,
            errors: undefined,
            data: data as T
        };

        return response;
    }

    handleError<T>(data: any) {
        let response: IAPIResponse<T> = {
            isSuccess: false,
            errors: data,
            data: undefined
        }
        return response;
    }

    async get<T>(url: any, params?: any) {
        try {
            var apiResponse = await this.axiosInstance.get(url, { params: params });
            if (apiResponse.status === APIConstants.API_STATUS_CODE_200) {
                return this.handleResponse<T>(apiResponse.data.data);
            } else {
                return this.handleError<T>(apiResponse);
            }
        } catch (error) {
            return this.handleError(error);
        }
    }

    async post<T>(url: any, params?: any) {
        try {
            var apiResponse = await this.axiosInstance.post(
                url,
                JSON.stringify({
                    params: params
                })
            );

            if (apiResponse.status === APIConstants.API_STATUS_CODE_200) {
                return this.handleResponse<T>(apiResponse.data.data);
            } else {
                return this.handleError<T>(apiResponse);
            }
        } catch (error) {
            return this.handleError(error);
        }
    }

    async put<T>(url: any, params?: any) {
        try {
            var apiResponse = await this.axiosInstance.put(
                url,
                JSON.stringify({
                    params: params
                })
            );

            if (apiResponse.status === APIConstants.API_STATUS_CODE_200) {
                return this.handleResponse<T>(apiResponse.data.data);
            } else {
                return this.handleError<T>(apiResponse);
            }
        } catch (error) {
            return this.handleError(error);
        }
    }

    async patch<T>(url: any, params?: any) {
        try {
            var apiResponse = await this.axiosInstance.patch(
                url,
                JSON.stringify({
                    params: params
                })
            );

            if (apiResponse.status === APIConstants.API_STATUS_CODE_200) {
                return this.handleResponse<T>(apiResponse.data.data);
            } else {
                return this.handleError<T>(apiResponse);
            }
        } catch (error) {
            return this.handleError(error);
        }
    }

    async delete<T>(url: any) {
        try {
            var apiResponse = await this.axiosInstance.delete(url);

            if (apiResponse.status === APIConstants.API_STATUS_CODE_200) {
                return this.handleResponse<T>(apiResponse.data.data);
            } else {
                return this.handleError<T>(apiResponse);
            }
        } catch (error) {
            return this.handleError(error);
        }
    }
}

export default new APIService();