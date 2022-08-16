export interface PageResult<T> {
  data: T[];
  total: number;
}

export interface PaginatedRequest extends Recordable<any> {
  page: number;
  limit: number;
  order?: string;
}
