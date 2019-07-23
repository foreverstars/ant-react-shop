import { getList } from '@/services/product';
const UserModel = {
  namespace: 'product',
  state: {
    filters: [
      {
        type: 'input',
        value: '',
        label: '商品名称',
        property: 'name'
      },
      {
        type: 'input',
        value: '',
        label: '商品货号',
        property: 'price'
      },
      {
        type: 'input',
        value: '',
        label: '商品分类',
        property: 'type'
      },
      {
        type: 'input',
        value: '',
        label: '商品品牌',
        property: 'p'
      },
      {
        type: 'input',
        value: '',
        label: '上架状态',
        property: 'status'
      },
      {
        type: 'input',
        value: '',
        label: '审核状态',
        property: 'checkStatus'
      }
    ],
    list: []
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },

    *getList ({ payload = {} }, { call, put }) {
      const response = yield call (getList, payload)
      yield put({
        type: 'updateState',
        payload: {
          list: response.data || []
        }
      })
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },

    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
export default UserModel;
