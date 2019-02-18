import update from 'immutability-helper'

function delay(timeout,asyncCount){
  return new Promise((resolve)=>{
    setTimeout(resolve.bind(this,asyncCount),timeout) //setTime第一个参数传递函数,触发时直接调用
  })
}
export default {
  namespace: 'home',//namespace 是 model state 在全局 state 所用的 key

  state: {
    activeIndex:0
  },

  subscriptions: {//订阅
    setup({ dispatch, history }) {
      //监听路由的变化
      history.listen(( {pathname} ) => {
          //退出登陆状态的时候任何路由的跳转最后都会返回到login 
          let token = window.localStorage.token;
          if(!token && pathname!= '/login'){
            history.push('/login')
          }

      })
    },
  },

  effects: {

    
  },

  reducers: {
    changeState(state,{payload}){
      return update(state,{
        [payload[0]] : {
          $set : payload[1]
        }
      })
    }

  },

};
