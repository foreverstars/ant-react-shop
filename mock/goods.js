// 代码中会兼容本地 service mock 以及部署站点的静态数据

const Mock = require('mockjs')

const classifyData = [
  {
    id: 1,
    name: '服装',
    level: '一级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 0
  },
  {
    id:6,
    name: '外套',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 1
  },
  {
    id: 7,
    name: 'T恤',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 1
  },
  {
    id: 2,
    name: '手机数码',
    level: '一级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 0
  },
  {
    id:8,
    name: '手机通讯',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 2
  },
  {
    id: 9,
    name: '手机配件',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId:2
  },
  {
    id: 3,
    name: '家用电器',
    level: '一级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 0
  },
  {
    id:10,
    name: '电视',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId:3
  },
  {
    id: 11,
    name: '空调',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId:3
  },
  {
    id: 4,
    name: '家具家装',
    level: '一级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 0
  },
  {
    id:12,
    name: '厨房卫浴',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 4
  },
  {
    id: 13,
    name: '灯饰照明',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 4
  },
  {
    id: 5,
    name: '汽车用品',
    level: '一级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 0
  },
  {
    id:14,
    name: '车载电器',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 5
  },
  {
    id: 15,
    name: '维修保养',
    level: '二级',
    count: 100,
    unit: '件',
    sort: 1,
    parentId: 5
  },
]
export default {
  // 支持值为 Object 和 Array
  'GET /product/list': {
    code: '1',
    data: [
      {
        id: 1,
        pic: '华为P20',
        name: '华为P20',
        price: '￥3788',
        tag: '新品',
        sort: 100,
        sku: '2',
        promotion: 99,
        status: '已审核'
      },
      {
        id: 2,
        pic: 'OPPO20',
        name: 'OPPO20',
        price: '￥4500',
        tag: '新品',
        sort: 100,
        sku: '2',
        promotion: 99,
        status: '已审核'
      },
      {
        id: 3,
        pic: '苹果12',
        name: '苹果12',
        price: '￥6300',
        tag: '新品',
        sort: 100,
        sku: '2',
        promotion: 99,
        status: '已审核'
      }
    ]
  },
  ['GET /classifyProduct/list'] (req, res) {
    const {query} = req
    let data = classifyData
    if (query.parentId) {
      data = classifyData.filter(v => v.parentId === Number(query.parentId))
    } else {
      data = classifyData.filter(v => v.parentId === 0)
    }
    res.status(200).json({
      code: 1,
      data
    })
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]
};
