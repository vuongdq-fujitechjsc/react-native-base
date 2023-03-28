export interface APIResponse {
    isSuccess: boolean;
    errors?: Error;
}

export interface IAPIResponse<T> extends APIResponse{
    data?: T;
}