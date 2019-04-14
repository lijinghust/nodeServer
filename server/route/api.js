const router = require('koa-router')({
    prefix: '/api'
});
const checkToken = require('../middleware/checkToken.js');

const proxyController = require('../controller/proxy.js');


// qiniu token proxy
// router.get('/token', checkToken, proxyController["POST token"]);
// router.get('/token', proxyController["POST token"]);
debugger
router.get('/todo/list', proxyController['GET list'])
router.post('/todo/add', proxyController['POST add'])
router.delete('/todo/delete/:id', proxyController['DELETE delete'])
router.post('/todo/update', proxyController['POST update'])

module.exports = router;