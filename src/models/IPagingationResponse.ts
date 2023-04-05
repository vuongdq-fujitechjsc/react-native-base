export interface PaginationParams {
    _page: number
    _limit: number;
    _totalRows: number;
}

export interface ListRequest {
    _page?: number;
    _limit?: number;
    _sort?: string;
    _order?: 'asc' | 'desc';
    [key: string]: any;
}

export interface ListResponse<T, PaginationParams> {
    data: T[];
    pagination: PaginationParams;
}