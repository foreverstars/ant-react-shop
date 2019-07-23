import { getList } from '@/services/product';
const UserModel = {
  namespace: 'addProduct',
  state: {
    info: {
      type: '',
      name: '',
      subTitle: '',
      brand: '',
      desc: '',
      no: '',
      price: 0,
      marketPrice: 0,
      storage: 0,
      unit: '',
      weight: 0,
      sort: 0
    },
    promotion: {
      integral: 0,
      growth: 0,
      restrict: 0,
      isAdvance: false,
      isRacking: false,
      recommend: '',
      guarantee: [],
      detailTitle: '',
      detailDesc: '',
      keyword:'',
      remark: '',
      discounts: 'a'
    },
    property: {
      type: '',
      params: ''
    },
    relate: {
      type: '',
      params: ''
    }
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
