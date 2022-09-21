import { mock, Random } from 'mockjs';
import { buildUUID } from '../../../src/utils/uuid';
import { DATA_DICTIONARIES } from '../../../mock/common';
import ComponentData from '../../../src/views/tools/component/data';

let forms: any[] = mock({
  'data|30-100': [
    {
      id: '@guid()',
      modelId: null,
      name: '@word(4,12)',
      displayName: '@ctitle(4,6)',
      'group|1': [null, '系统', '工具', '平台', '流程', '运维'],
      url: '@url()',
      'isSetp|1': true,
      'isGroup|1': true,
      'isOperate|1': true,
      remark: '@cparagraph()'
    }
  ]
}).data;

forms = forms.map((t: any) => {
  return { ...t, fields: generateFields(t, Random.integer(4, 20)) };
});

export default [
  {
    url: '/api/tools/form/getAllForms',
    method: 'get',
    timeout: '2000',
    response: () => {
      return {
        code: 0,
        result: forms.map((t) => {
          return { ...t, fields: undefined };
        })
      };
    }
  },
  {
    url: '/api/tools/form/getForm',
    method: 'get',
    timeout: '2000',
    response: ({ query }) => {
      const formId = query.id;
      const form = forms.find((t) => t.id == formId);
      return {
        code: 0,
        result: form
      };
    }
  },
  {
    url: '/api/tools/form/deleteForm',
    method: 'post',
    timeout: '2000',
    response: ({ query }) => {
      const formId = query.id;
      const index = forms.findIndex((t) => t.id == formId);
      forms.splice(index, 1);
      return {
        code: index >= 0 ? 0 : -1
      };
    }
  },
  {
    url: '/api/tools/form/saveForm',
    method: 'post',
    timeout: '2000',
    response: ({ body }) => {
      const form = body;
      if (form.id) {
        const index = forms.findIndex((t) => t.id == form.id);
        forms.splice(index, 1, form);
      } else {
        form.id = buildUUID();
        form.fields = form.fields.map((t) => {
          return {
            ...t,
            id: buildUUID(),
            formId: form.id
          };
        });
        forms.push(form);
      }
      return {
        code: 0,
        result: form
      };
    }
  },
  {
    url: '/api/tools/form/getFormFields',
    method: 'get',
    timeout: '2000',
    response: ({ query }) => {
      const formId = query.formId;
      const objectId = query.objectId;
      const form = forms.find((t) => t.id === formId);
      let result = [];
      if (form) {
        if (objectId) {
          result = form.fields.filter((t) => t.objectId == objectId || !t.objectId);
        } else {
          result = form.fields;
        }
      }
      return {
        code: 0,
        result: result
      };
    }
  },
  {
    url: '/api/tools/model/saveModelProperty',
    method: 'post',
    timeout: '2000',
    response: ({ body }) => {
      const filedId = body.id;
      const formId = body.formId;
      const form = forms.find((t) => t.id === formId);
      const fields = form.fields as any[];
      const fieldIndex = fields.findIndex((t) => t.id == filedId);
      const field = { ...body, id: buildUUID() };
      fields.splice(fieldIndex, 1, field);
      form.fields = fields;
      const formIndex = forms.findIndex((t) => t.id == formId);
      forms.splice(formIndex, 1, form);
      return {
        code: 0,
        result: field
      };
    }
  },
  {
    url: '/api/tools/model/deleteField',
    method: 'post',
    timeout: '2000',
    response: ({ query }) => {
      const filedId = query.id;
      const form = forms.find((t) => t.fields.findIndex((o) => o.id == filedId) > -1);
      const fields = form.fields as any[];
      const fieldIndex = fields.findIndex((t) => t.id == filedId);
      fields.splice(fieldIndex, 1);
      form.fields = fields;
      const formIndex = forms.findIndex((t) => t.id == form.id);
      forms.splice(formIndex, 1, form);
      return {
        code: 0
      };
    }
  }
];

const OrganizationValues = DATA_DICTIONARIES.organization.map((t) => {
  return t.value;
});

function generateProperty(form) {
  const random = Random.pick([1, 3, 4, 7, 9]); //随机组织
  const objectId = random % 2 == 0 ? Random.pick(OrganizationValues) : null;

  let objectName = '';
  if (objectId) {
    objectName = DATA_DICTIONARIES.organization.filter((t) => t.value == objectId)[0].text;
  }
  const ComponentTypes = ComponentData.map((t) => t.name);
  const property = {
    id: Random.guid(),
    formId: form.id,
    propertyId: null,
    label: Random.ctitle(),
    name: Random.word(),
    component: Random.pick(ComponentTypes),
    componentProps: null,
    span: Random.pick([6, 8, 12, 24]),
    required: Random.boolean(),
    defaultValue: null,
    showLabel: Random.boolean(),
    setp: form.isSetp ? Random.pick([1, 2, 3]) : null,
    group: form.isGroup ? Random.pick(['分组1', '分组2', '分组3']) : null,
    remark: Random.cparagraph(),
    objectId: objectId,
    objectName: objectName
  };
  return property;
}

function generateFields(form, count) {
  const result: any[] = [];
  for (let i = 0; i < count; i++) {
    const property = generateProperty(form);
    result.push(property);
  }
  return result;
}
