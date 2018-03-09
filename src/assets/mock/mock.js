var axios = require('axios');
// 导入依赖的插件
var MockAdapter = require('axios-mock-adapter');

// 实例化对象
var mock = new MockAdapter(axios);
const listKey = require('../json/listKey.json')
const list = require('../json/list.json')
const preData = { status: '0', msg: 'success' }

// 模拟请求接口和返回数据
// arguments (status == 响应状态, data == 响应数据, headers == 响应头部信息)
mock.onGet('/api/listKey').reply(200, {
    preData,
    data: listKey
});

mock.onGet('/api/list').reply(200, {
    preData,
    data: list
});
// 导出
export default mock;