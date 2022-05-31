import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/createUser',
    method: 'get',
    response: ({ body, query }) => {
      console.log('body>>>>>>>>', body)
      console.log('query>>>>>>>>', query)
      return {
        code: 0,
        message: 'ok',
        data: null,
      }
    },
  },
] as MockMethod[]