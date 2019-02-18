import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import dynamic from 'dva/dynamic'//使用dynamic异步加载路由


function RouterConfig({ history,app }) {
  //初次加载体积变小，优化性能

  const Home = dynamic({ //面板
    app,
    component: () => import('./routes/Home')
  })
  
  const Login = dynamic({ //登陆
    app,
    component: () => import('./routes/Login')
  })



  /* ----分割线---- */ 
  return (
    <Router history={history}>
      <Switch>
        <Redirect from='/' to='/home/index' exact ></Redirect>
        <Route path="/home"  component={Home}></Route>
        <Route path="/login"  component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
