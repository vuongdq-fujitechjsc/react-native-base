export interface ListRequest {
    _page: number;
    _limit: number;
    _sort?: string;
    _order?: 'asc' | 'desc';
    [key: string]: any;
}

export interface ListResponse<T> {
    data: Array<T>;
}