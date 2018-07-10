const Koa = require('koa');
const router = require('koa-router')();
const routerHello = require('./controller/hello');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

router.get('/hello/:name', routerHello.hello);

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');