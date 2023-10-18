import restana from 'restana';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = restana();
//中间件
app.use(cors()); //允许跨域
app.use((req, res, next) => {
  return new Promise((resolve) => {
    bodyParser.raw()(req, res, (err) => resolve(next(err)));
  });
}); //默认Body作为字符串解析
app.use((req, res, next) => {
  return new Promise((resolve) => {
    bodyParser.json({
      type: ['application/json', 'application/*+json'],
    })(req, res, (err) => resolve(next(err)));
  });
}); //Json格式的解析

//路由
app.get('/health', async (q, s) => {
  s.send({ success: true, timestamp: Date.now() }, 200);
});

export { app as service };
