import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Card, Pagination } from 'antd'

class List extends React.Component{
  constructor () {
    super()
    this.state = {

    }
  }

  onChange = (pageNum, pageSize) => {
    this.props.pageNumChange && this.props.pageNumChange(pageNum)
  }


  onSizeChange = (current, size) => {
    this.props.pageSizeChange && this.props.pageSizeChange(size)
  }

  render () {
    const { columns, data, total, pageNum, pageSize, loading, rowKey } = this.props
    return (
      <Card style={{'marginTop': '20px'}} title={this.props.title || "列表"}>
        <div className="list-header">
          <div>{this.props.children}</div>
        </div>
        <Table 
          bordered
          rowKey={rowKey}
          columns={columns} 
          dataSource={data}
          loading={loading} 
          pagination={{
            showSizeChanger: true,
            current: pageNum,
            pageSize: pageSize,
            onChange: this.onChange,
            onShowSizeChange: this.onSizeChange,
            showTotal: total => `共${total}条`,
            total: total
          }}
        /> 
      </Card>
    )
  }
}

List.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  total: PropTypes.number,
  loading: PropTypes.bool,
  pageNum: PropTypes.number,
  pageSize: PropTypes.number,
  pageNumChange: PropTypes.func,
  pageSizeChange: PropTypes.func,
  rowKey: PropTypes.string
}

export default List