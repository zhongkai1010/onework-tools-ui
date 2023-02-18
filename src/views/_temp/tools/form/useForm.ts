/*
 * @Author: zhongkai1010 zhongkai1010@163.com
 * @Date: 2022-09-23 16:14:20
 * @LastEditors: zhongkai1010 zhongkai1010@163.com
 * @LastEditTime: 2022-09-23 17:12:34
 * @FilePath: \onework-tools-ui\src\views\tools\form\useForm.ts
 * @Description:
 */

import formApi, { Form, FormField } from '/@/api/tools/form';
import { useHttpFetch } from '/@/hooks/fetch';

export default function useForm() {
  const current = ref<Form>();
  const selectOrg = ref<string>();
  const getFormFetch = useHttpFetch(formApi.getAllForms, null, {
    immediate: true
  });

  const fields = computed<FormField[]>({
    get: () => {
      if (!current.value) return [];
      let data = current.value.fields;
      if (selectOrg.value) {
        data = data.filter((t) => t.orgId == selectOrg.value || !t.orgId);
      }
      return data;
    },
    set: (value) => {
      current.value.fields = value;
    }
  });

  const setCurrent = (form: Form) => {
    current.value = form;
  };

  const removeForm = (form: Form) => {
    const index = getFormFetch.data.value.findIndex((t) => t.id == form.id);
    getFormFetch.data.value.splice(index, 1);
    if (current?.value.id === form.id) {
      fields.value = [];
      current.value = null;
    }
  };
  return {
    ...getFormFetch,
    fields,
    setCurrent,
    removeForm,
    current,
    selectOrg
  };
}
