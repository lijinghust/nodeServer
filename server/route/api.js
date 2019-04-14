const router = require('koa-router')({
    prefix: '/api'
});
const checkToken = require('../middleware/checkToken.js');

const proxyController = require('../controller/proxy.js');


// qiniu token proxy
// router.get('/token', checkToken, proxyController["POST token"]);
// router.get('/token', proxyController["POST token"]);

router.get('/todo/list', proxyController['GET list'])
router.get('/todo/add', proxyController['POST add'])
router.get('/todo/delete/:id', proxyController['DELETE delete'])
router.get('/todo/update', proxyController['POST update'])

module.exports = router;