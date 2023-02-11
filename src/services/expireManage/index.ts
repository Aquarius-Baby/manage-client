import {request} from '@@/plugin-request';
import {BaseResult} from "@/interface/ModalType";
import {ExpireManageList} from "@/models/ExpireManage/expire.t";

export async function queryExpireList(params: any): Promise<BaseResult<ExpireManageList>> {
    return request('/api/expire/list', {
        skipErrorHandler: true,
        params: params,
        getResponse: false,
        requestInterceptors: [],
        responseInterceptors: [],
    });
}
