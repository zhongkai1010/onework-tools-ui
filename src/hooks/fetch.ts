import { ref, UnwrapRef } from 'vue';

interface FetchConfig extends Recordable<any> {
  immediate?: boolean; //是否立即执行
}

export function useHttpFetch<P, T>(
  fun: (params: P) => Promise<T>,
  params?: P,
  config?: FetchConfig
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
        .then((result) => {
          data.value = result as UnwrapRef<T>;
          resolve(result);
        })
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
    execute
  };
}
