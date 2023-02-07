import type {Reducer, Effect} from 'umi'
import {queryExpireList} from "@/services/expireManage";

/**
 * @description 声明HomeModelState中state的数据类型
 */
export interface ExpireModelState {
    list: []
}

/**
 * @description 声明HomeModelType的数据类型
 */
export interface ExpireModelType {
    namespace: 'expire'
    state: ExpireModelState
    effects: { queryList: Effect }
    reducers: { saveList: Reducer<any> }
}

/**
 * @description 定义HomeModel
 */
const ExpireModel: ExpireModelType = {
    /**
     * @param namespace: 如果没有声明 namespace，会以文件名作为 namespace
     */
    namespace: 'expire',
    state: {
        list: [],
    },
    /**
     * @description  // reducers 用来处理同步操作，与Vuex 中mutions 中一样
     * @param state: HomeModelType的state对象
     * @param action：调用该方法传过来的值
     * @param setName:这里的名字根据实际用途命名，可以在reducers中无限添加函数
     */
    reducers: {
        saveList(state: any, action: any) {
            return {
                ...state,
                list: action.payload
            }
        },
    },
    /**
     * @description effects 用来处理异步操作，与Vuex 中actions 中一样，调用方法与reducers一样，这点与Vux不同
     * @param payload:调用query时传过来的参数，比如这里放的是http请求，需要在路由中传参数进来
     * @param put
     */
    effects: {
        * queryList({payload}, {call, put}) {
            const res: any = yield queryExpireList();
            // const res1 = yield request.post('/api/getNames', { data: { name: payload } })
            if (res.success) {
                yield put({
                    type: 'saveList',
                    payload: {
                        data: res.data,
                    },
                })
            }
        },
    },
}
export default ExpireModel;

