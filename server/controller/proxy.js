const request = require('request');

const url = 'http://bsp.babytree.com/open/upload/token/tokenAjax';

const getToken = function(ctx){
    return new Promise(function(resolve, reject){
        request.post({url: url}, function(err, res, body){
            if(err){
                reject(err)
            }
            resolve(body);
        })    
    })
}

const token = async function(ctx, next){
    const ret = await getToken(ctx);

    console.log(ret)
    ctx.response.body = ret;

}


module.exports = {
    'POST token': token
}