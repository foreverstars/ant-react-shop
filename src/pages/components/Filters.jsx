import React from 'react'
import PropTypes from 'prop-types'
import { Form, Card, Input, Select, Row, Col, Button } from 'antd'

const { Option } = Select;

class Filters extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: props.options || [],
      forceRefresh: true
    }
  }

  handleInputChange = (config, e) => {
    config.value = e.target.value || ''
  }

  handleSelectChange = (val, item, config) => {
    config.value = val || ''
  }

  renderItems = () => {
    let items = []
    for (let i = 0, len = this.state.options.length; i < len; i++){
      let config = this.state.options[i]
      config.value = config.defaultValue || ''
      let item = null
      if (config.type === 'input') {
        item = (
        <Col key={i} >
          <Form.Item label={config.name || ''}>
            <Input
              placeholder="请输入"
              type="input"
              defaultValue={config.defaultValue || ''}
              allowClear={true}
              onChange={this.handleInputChange.bind(this, config)}
            />
          </Form.Item>
        </Col>
      )
      } else if (config.type === 'select') {
        const options = []
        config.options.forEach((v, index) => {
          options.push(
            <Option key={v[config.valueKey || 'value']}>{v[config.labelKey || 'label']}</Option>
          )
        })
        item = (
          <Col key={i}>
            <Form.Item label={config.name || ''}>
              <Select
                placeholder="请选择"
                defaultValue={config.defaultValue}
                onChange={this.handleSelectChange.bind(this, config)}
                showSearch={true}
                allowClear={true}
              >
                {options}
              </Select>
            </Form.Item>
          </Col>
        )

      } else if (config.type === 'year') {

      } else if (config.type === 'month') {

      } else if (config.type === 'date') {

      } else if (config.type === 'datepicker') {

      } else {

      }
      items.push(item)
    }
    return (<Row gutter={10} style={{marginBottom:'15px'}} type="flex" justify="start" >
        {
          items.map(v => {
            return v
          })
        }
      </Row>  
    )
  }

  handelSearch = () => {
    this.props.filterChange && this.props.filterChange(this.state.options)
  }

  handelReset = () => {
    const options = this.state.options
    this.setState({
      options: [...options],
      forceRefresh: !this.state.forceRefresh
    })
  }

  render () {
    return (
      <Card>
        <Form layout="inline">
          {
            this.state.forceRefresh ?
          this.renderItems() : <div>{this.renderItems()}</div>
          }
        </Form>
        <div style={{ 'float': 'right' }}>
           <Button style={{ 'marginRight': '10px' }} onClick={this.handelSearch} type="primary">查 询</Button>
           <Button onClick={this.handelReset}>重 置</Button>
        </div>
      </Card>
    )
  }
}


Filters.propTypes = {
  options: PropTypes.array,
  filterChange: PropTypes.func
}
export default Filters