import React from 'react'
import PropTypes from 'prop-types'
import { Form, Card, Input, Select, Row, Col, Button } from 'antd'

const { Option } = Select

const FiltersCom = ({
  options,
  form: {
    getFieldDecorator,
    getFieldsValue,
    setFieldsValue
  },
  filterChange
}) => {
  const handelSearch = () => {
    const value = getFieldsValue()
    filterChange && filterChange(value)
  }

  const handelReset = () => {
    const fields = getFieldsValue()
    for (let item in fields) {
      if({}.hasOwnProperty.call(fields, item)){ // 对fields数据进行处理,只重置它自己的属性,而不处理它原型链上的属性
        if(fields[item] instanceof Array){
          fields[item] = []
        }else{
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields) // 重置表单的值
  }

  const InputForm = (filter) => {
    return <Col key={filter.property}>
      <Form.Item label={filter.label || ''}>{getFieldDecorator(filter.property, {
        initialValue: filter.defaultValue,
      })(
        <Input
          placeholder={filter.placeholder || "请输入" }
          allowClear={true}
        />
      )}
      </Form.Item>
    </Col>
  }

  const SelectForm = (filter) => {
    return <Col key={filter.property}>
      <Form.Item label={filter.label || ''}>
        {getFieldDecorator(filter.property, {
        initialValue: filter.defaultValue,
      })(
        <Select 
        placeholder={filter.placeholder || "请选择"}
        showSearch={true}
        allowClear={true}
        >
          {
            Array.isArray(filter.option) && filter.option.map((item)=>(
              <Option key={item.value} >{item.text}</Option>
            ))
          }
        </Select>
      )}
      </Form.Item>
    </Col>
  }

  return (<Card title="筛选">
      <Form layout="inline" >
        <Row gutter={10} style={{marginBottom:'15px'}} type="flex" justify="start" >
        {options.map((item, key) => {
          if (item.type === 'input') {
            return InputForm(item)
          } else if (item.type === 'select'){
            return SelectForm(item)
          } else {
            return InputForm(item)
          }
        })}
        </Row>
      </Form>
      <div style={{ 'float': 'right' }}>
        <Button style={{ 'marginRight': '10px' }} onClick={handelSearch} type="primary">查 询</Button>
        <Button onClick={handelReset}>重 置</Button>
      </div>
    </Card>)
}

FiltersCom.propsTypes = {
  options: PropTypes.array,
  filterChange: PropTypes.func
}

export default Form.create()(FiltersCom)