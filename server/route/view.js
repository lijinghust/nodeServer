const router = require("koa-router")();
const path = require('path');
const fs = require("fs");

router.get(['/', '/index'], ctx => {
    loadTemp('./../../dist/index.html').then(function(data){
        ctx.response.body = data;
    });
})

router.get('/404', ctx => {
    loadTemp('./../../dist/404.html').then(function(data){
        ctx.response.body = data;
    });
})


async function loadTemp(filename){
    const html = await fs.readFileSync(path.join(__dirname, filename), "utf8")
    return html;
}

module.exports = router;
