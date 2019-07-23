import React from 'react'
import { Button } from 'antd'
import { connect } from 'dva'
import List from '../components/List'
import { routerRedux } from 'dva/router'
import qs from 'qs';

const NAMESPACE = 'brandManage'

@connect(({ [NAMESPACE]: modelState, location, dispatch, loading }) => ({
  location, 
  dispatch, 
  loading,
  modelState
}))

export default class Page extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      pageNum: 1,
      pageSize: 10
    }
    this.dispatch = props.dispatch
  }

  handleSearch = (params) => {
    // this.dispatch({
    //   type: `${NAMESPACE}/getList`,
    //   payload:  params || {}
    // })
    const { query, pathname } = location;
    this.dispatch(routerRedux.push({
      pathname,
      search: qs.stringify({
        ...query,
        ...params
      }),
    }))
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

  handleCreate = () => {

  }
  handleEdit = () => {

  }
  handleDelete = () => {

  }

  handleSub = (row) => {
    this.handleSearch({
      parentId: row.id
    })
  }

  componentDidMount () {
    this.handleSearch()
  }

  render() {
    const { loading } = this.props
    const { list, filters } = this.props.modelState
    const columns = [{
      title: '编号',
      dataIndex: 'id'
    },
    {
      title: '品牌名称',
      dataIndex: 'name'
    },
    {
      title: '品牌首字母',
      dataIndex: 'level'
    },
    {
      title: '排序',
      dataIndex: 'count'
    },
    {
      title: '品牌制造商',
      dataIndex: 'unit'
    },
    {
      title: '是否显示',
      dataIndex: 'navBar'
    },
    {
      title: '相关',
      dataIndex: 'display'
    },
    {
      title: '操作',
      dataIndex: 'actions',
      render: (record) => {
        return (
          <span>
            <a onClick={this.handleEdit} className="margin-right" href="javascript:;">编辑</a>
            <a onClick={this.handleDelete} className="margin-right" href="javascript:;">删除</a>
          </span>
        )
      }
    }]

    return (
      <div className="container">
        <List 
          columns={columns}
          data={list}
          rowKey="id"
          loading={loading.effects['classifyProduct/getList']}
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