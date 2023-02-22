export interface ResponsePageData<T> {
  data: T[];
  total: number;
}

export interface ResponseData<T> {
  data: T[];
}

export interface RequestResult<T> {
  code: number;
  msg: string;
  data: T;
}
