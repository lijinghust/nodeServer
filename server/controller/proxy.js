const request = require('request');

let url = 'http://m.toutiao.com/list/?ac=wap&count=20&format=json_raw&as=A115BC629D76C2C&cp=5C2DA6BCB2DCBE1&min_behot_time=0&_signature=jyMAXAAA0xowVfG6-WuvIY8jAE&i='

const getToken = function(ctx){
    const params = ctx.params;
    const tag = ctx.params.tag || '__all__';
    url += '&tag=' + tag;
    return new Promise(function(resolve, reject){
        request.post({url: url}, function(err, res, body){
            if(err){
                reject(err)
            }
            resolve(body);
        })
    })
}

const toutiao = async function(ctx, next){
    const ret = await getToken(ctx);

    console.log(ret)
    ctx.response.body = ret;

}


const list = async function(ctx, next){

    ctx.response.body = {
        err: 0,
        msg: 'get list success',
        data: [
            {
                id: 1,
                text: '老婆好漂亮',
            },
            {
                id: 2,
                text: '明天记得翻牌',
            },
            {
                id: 3,
                text: '今天去交水电费',
            },
            {
                id: 4,
                text: '记得去打疫苗'
            }
        ]
    }
}


const add = async function(ctx, next){
    const body = ctx.request.body;
    if(!body.content){
        ctx.response.body = {
            err: 1,
            msg: 'content is required!',
            data: []
        }
        return;
    }
    ctx.response.body = {
        err: 0,
        msg: 'add success',
        data: []
    }
}

const del = async function(ctx, next){
    debugger
    const params = ctx.params;
    if(!params.id){
        ctx.response.body = {
            err: 1,
            msg: 'id is required!',
            data: []
        }
        return;
    }
    ctx.response.body = {
        err: 0,
        msg: 'delete success',
        data: []
    }
}
const update = async function(ctx, next){
    const body = ctx.request.body;
    if(!body.id || !body.content){
        ctx.response.body = {
            err: 1,
            msg: 'id is required!',
            data: []
        }
        return;
    }
    ctx.response.body = {
        err: 0,
        msg: 'delete success',
        data: []
    }
}

module.exports = {
    'GET toutiao': toutiao,
    'GET list': list,
    'POST add': add,
    'DELETE delete': del,
    'POST update': update
}