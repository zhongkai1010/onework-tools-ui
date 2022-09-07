import { Property } from './types';

const data: Property[] = [
  {
    name: 'title',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'rowKey',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'serialNumber',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'fields',
    title: '表格名称',
    type: 'array',
    required: true,
    array: 'object',
    fields: [
      {
        name: 'label',
        title: '表格名称',
        type: 'string',
        required: true
      },
      {
        name: 'name',
        title: '表格名称',
        type: 'string',
        required: true
      },
      {
        name: 'hide',
        title: '表格名称',
        type: 'string',
        required: true
      },
      {
        name: 'type',
        title: '表格名称',
        type: 'string',
        required: true
      },
      {
        name: 'props',
        title: '表格名称',
        type: 'string',
        required: true
      },
      {
        name: 'order',
        title: '表格名称',
        type: 'string',
        required: true
      },
      {
        name: 'editable',
        title: '表格名称',
        type: 'object',
        required: true,
        fields: [
          {
            name: 'hide',
            title: '表格名称',
            type: 'string',
            required: true
          },
          {
            name: 'span',
            title: '表格名称',
            type: 'string',
            required: true
          },
          {
            name: 'defaultValue',
            title: '表格名称',
            type: 'string',
            required: true
          },
          {
            name: 'component',
            title: '表格名称',
            type: 'object',
            required: true,
            fields: [
              {
                name: 'component',
                title: '表格名称',
                type: 'string',
                required: true
              },
              {
                name: 'props',
                title: '表格名称',
                type: 'string',
                required: true
              },
              {
                name: 'config',
                title: '表格名称',
                type: 'string',
                required: true
              },
              {
                name: 'dataMode',
                title: '表格名称',
                type: 'string',
                required: true
              },
              {
                name: 'options',
                title: '表格名称',
                type: 'object',
                required: true,
                fields: [
                  {
                    name: 'label',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'value',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'children',
                    title: '表格名称',
                    type: 'array',
                    array: 'object',
                    required: true
                  }
                ]
              },
              {
                name: 'remote',
                title: '表格名称',
                type: 'string',
                required: true,
                fields: [
                  {
                    name: 'url',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'method',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'params',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'labelKey',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'valueKey',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'childerKey',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'searchKey',
                    title: '表格名称',
                    type: 'string',
                    required: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'multiple',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'data',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'pagination',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'toolbar',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'operate',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'remote',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'save',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'remove',
    title: '表格名称',
    type: 'string',
    required: true
  },
  {
    name: 'props',
    title: '表格名称',
    type: 'string',
    required: true
  }
];
export default data;
