const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = '[traefik + drone] Hello World';
});

app.listen(3000);