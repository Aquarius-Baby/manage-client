export interface BaseResult<T> {
    success?: boolean,
    errorMessage?: string,
    errCode?: string,
    module?: T
}

export interface TableResult<T> {
    success?: boolean,
    errorMessage?: string,
    errCode?: string,
    currentPage: number,
    totalRecords: number,
    dataSource?: T[],
}

