import getData from '@/services/getData'

export default {
  namespace: 'chart',
  state: {
    option: {}
  },
  reducers: {
    update(state,{payload}){
      console.log(state,payload);
      
      return {
        ...state,
        option: payload.option
      }
    }
  },
  effects: {
    *getData ({payload,callback},{call,put}) {
      // console.log(payload);
      const data = yield call(getData)
      callback(data)
      // console.log(data);
      yield put({
        type:'update',
        payload: data.data
      })
    }
  }
}