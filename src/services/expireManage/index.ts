import { request } from '@@/plugin-request';

export async function list() {
  return request('/api/expire/list', {
    skipErrorHandler: true,
    getResponse: false,
    requestInterceptors: [],
    responseInterceptors: [],
  });
}
