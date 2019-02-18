import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';  //鸡肋，用不上

// 1. Initialize
const app = dva();

// 2. Plugins
app.use({});

//3. Model
app.model(require('./models/home').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
