import { ref, unref, UnwrapRef } from 'vue';
import { http } from '../utils/http';

interface FetchConfig extends Recordable<any> {
  immediate?: boolean; //是否立即执行
}

export function useFetch<T, P>(fun: (params: T) => Promise<P>, params: T) {
  const loading = ref(true);
  const isError = ref(false);
  const error = ref(null);
  const result = ref<P>(null);
  const execute = (p: T) => {
    loading.value = true;
    fun(p)
      .then((data: P) => {
        result.value = data as UnwrapRef<P>;
      })
      .catch((data) => {
        isError.value = true;
        error.value = data;
        result.value = data.response.data as UnwrapRef<P>;
      })
      .finally(() => (loading.value = false));
  };
  // 默认立即执行
  execute(params);
  return {
    loading,
    isError,
    error,
    result,
    execute,
  };
}

export function useGetFetch<T>(url, params) {
  const loading = ref(false);
  const isError = ref(false);
  const error = ref(null);
  const result = ref<T>(null);

  const execute = () => {
    loading.value = true;
    isError.value = false;
    result.value = null;
    error.value = null;
    const _url = unref(url);
    const _params = { params: unref(params) };

    http
      .get(_url, _params)
      .then((data) => {
        result.value = data as UnwrapRef<T>;
      })
      .catch((data) => {
        isError.value = true;
        error.value = data;
        result.value = data.response.data as UnwrapRef<T>;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    loading,
    isError,
    error,
    result,
    execute,
  };
}

export function useHttpFetch<P, T>(
  fun: (params: P) => Promise<T>,
  params?: P,
  config?: FetchConfig,
) {
  // 是否结束
  const isFinished = ref(false);
  // 是否成功
  const statusCode = ref(null);
  // 返回数据
  const data = ref<T | null>(null);
  // 是否请求中
  const isFetching = ref(false);

  const execute = (params: P) => {
    isFetching.value = true;
    data.value = null;
    isFinished.value = false;
    statusCode.value = null;

    return new Promise<T>((resolve, reject) => {
      fun(params)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          isFinished.value = true;
          isFetching.value = false;
        });
    });
  };

  if (config?.immediate) {
    execute(params).then((result) => {
      data.value = result as UnwrapRef<T>;
    });
  }

  return {
    isFinished,
    statusCode,
    data,
    isFetching,
    execute,
  };
}
