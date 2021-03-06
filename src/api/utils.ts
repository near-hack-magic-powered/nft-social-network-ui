export type PaginationParams = {
  limit: number;
  offset: number;
};

export type Pagination = {
  offset: number;
  limit: number;
  total: number;
};

export const DEFAULT_PAGE_LIMIT = 20;
