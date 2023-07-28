export interface PaginationDTO {
  pageNumber: number;
  pageSize: number;
}

export interface PaginationResult<T> {
  totalCount: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  items: T;
}
