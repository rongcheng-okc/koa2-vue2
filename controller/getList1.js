var getList1 = async (ctx, next) => {
    let id = ctx.request.query.id;
    let data = [
        {
            name: 'yf', age: id*1
        },
        {
            name: 'rc', age: id*2
        },
        {
            name: 'ygy', age: id*3
        }
    ]; 
    ctx.body = data;
};

module.exports = {
    getList1: getList1
};