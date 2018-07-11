const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const static = require('koa-static');
const cors = require('koa2-cors');

const routerHello = require('./controller/hello');
const getList = require('./controller/getList1');

app.use(cors({
    origin: function(ctx) {
        return '*';
    },
}));

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(static(__dirname + '/view/dist'));

router.get('/api/getList1', getList.getList1);

router.get('/hello/:name', routerHello.hello);

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');