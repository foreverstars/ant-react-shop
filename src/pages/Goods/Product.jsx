import React from 'react'
import Filters from '../components/Filters'
import FiltersCom from '../components/FiltersCom'
import List from '../components/List'
import { connect } from 'dva'
import { Button } from 'antd' 

const NAMESPACE = 'product'

@connect(({ [NAMESPACE]: modelState, location, dispatch, loading }) => ({
  location, 
  dispatch, 
  loading,
  modelState
}))

export default class Page extends React.Component{
  constructor(props) {
    super (props)
    this.state = {
      count: 0,
      options: [
        {
          type: 'input',
          label: '商品名称',
          property: 'name'
        },
        {
          type: 'input',
          label: '商品价格',
          property: 'price'
        },
        {
          type: 'input',
          label: '商品大小',
          property: 'size'
        }
      ],
      pageNum: 1,
      pageSize: 10
    }
    this.dispatch = props.dispatch
  }

  handleSearch = () => {
    this.dispatch({
      type: `${NAMESPACE}/getList`,
      payload:  this.getParams()
    })
  }

  getParams = () => {
    const params = this.state.options.reduce((pre, cur) => {
      pre[cur.property] = cur.value
      return pre
    }, {})
    params.pageNum = this.state.pageNum
    params.pageSize = this.state.pageSize
    return params
  }

  onPageNumChange = (pageNum) => {
    this.setState({
      pageNum
    }, () => {
      this.handleSearch()
    })
  }

  onPageSizeChange= (pageSize) => {
    this.setState({
      pageSize
    }, () => {
      this.handleSearch()
    })
  }

  handleView = (row) => {

  }

  handleEdit = (row) => {
    
  }

  handleView = (row) => {
    
  }

  handleDelete = (row) => {
    
  }

  handleCreate = () => {

  }
  
  render() {
    const { loading } = this.props
    const { list, filters } = this.props.modelState
    const columns = [{
      title: '编号',
      dataIndex: 'id'
    },
    {
      title: '商品图片',
      dataIndex: 'pic'
    },
    {
      title: '商品名称',
      dataIndex: 'name'
    },
    {
      title: '价格/货号',
      dataIndex: 'price'
    },
    {
      title: '标签',
      dataIndex: 'tag'
    },
    {
      title: '排序',
      dataIndex: 'sort'
    },
    {
      title: 'SKU库存',
      dataIndex: 'sku'
    },
    {
      title: '销量',
      dataIndex: 'promotion'
    },
    {
      title: '审核状态',
      dataIndex: 'status'
    }, 
    {
      title: '操作',
      dataIndex: 'actions',
      render: (record) => {
        return (
          <span>
            <a onClick={this.handleView} className="margin-right" href="javascript:;">查看</a>
            <a onClick={this.handleEdit} className="margin-right" href="javascript:;">编辑</a>
            <a onClick={this.handleLog} className="margin-right" href="javascript:;">日志</a>
            <a onClick={this.handleDelete} className="margin-right" href="javascript:;">删除</a>
          </span>
        )
      }
    }]

    return (
      <div className="container">
        {/* <Filters options={this.state.options} filterChange={this.handleSearch}/> */}
        <FiltersCom options={filters} filterChange={this.handleSearch} ref="filter"/>
        <List 
          columns={columns}
          data={list}
          rowKey="id"
          loading={loading.effects['product/getList']}
          pageNum={this.state.pageNum}
          pageSize={this.state.pageSize}
          total={list.length}
          pageNumChange={this.onPageNumChange}
          pageSizeChange={this.onPageSizeChange}
        >
          <Button type="primary" onClick={this.handleCreate}>添 加</Button>
        </List>
      </div>
    );
  }
}