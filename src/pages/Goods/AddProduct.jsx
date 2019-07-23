import React from 'react'
import { Steps, Card, Form, Input, Button, Switch, Checkbox, Radio } from 'antd'
import { connect } from 'dva'

const { Step } = Steps

const NAMESPACE = 'addProduct'

@connect(({ [NAMESPACE]: modelState, location, dispatch, loading }) => ({
  location, 
  dispatch, 
  loading,
  modelState
}))

export default Form.create()(class AddProject extends React.Component{
  constructor(props) {
    super (props)
    this.state = {
      step: 0
    }
    console.log(this.props.form)
  }

  lastStep = () => {
    this.setState({
      step: --this.state.step
    })
  }

  nextStep = () => {
    const { validateFields, getFieldsValue } = this.props.form
    const keyOptions = ['info', 'promotion', 'property', 'relate']
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = getFieldsValue()
      this.props.dispatch({
        type: 'addProduct/updateState',
        payload: { [keyOptions[this.state.step]]: data },
      });

      this.setState({
        step: ++this.state.step
      })
    })
  }

  renderOperatinos = () => {
    var step = this.state.step
    if (step === 0) {
      return (
        <Button onClick={this.nextStep} type="primary">下一步, 填写商品促销</Button>
      )
    } else if (step === 1) {
      return (
        <span>
          <Button onClick={this.lastStep}>上一步, 填写商品信息</Button>
          <Button onClick={this.nextStep} type="primary">下一步, 填写商品属性</Button>
        </span>
      )
    } else if (step === 2) {
      return (
        <span>
          <Button onClick={this.lastStep}>上一步, 填写商品促销</Button>
          <Button onClick={this.nextStep} type="primary">下一步, 选择产品关联</Button>
        </span>
      )
    } else {
      return (<span>
        <Button onClick={this.lastStep}>上一步, 填写商品属性</Button>
        <Button type="primary">完成, 提交产品</Button>
      </span>)
    }
  }
  render() {
    const { info, promotion, form, property, relate } = this.props.modelState
    const { getFieldDecorator } = this.props.form

    const RenderForm0 = (({
    }) => {
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        }
      }
      return (
        <Form {...formItemLayout}>
        <Form.Item label="商品分类">
          {getFieldDecorator('type', {
            initialValue: info.type,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品名称">
          {getFieldDecorator('name', {
            initialValue: info.name,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="副标题">
          {getFieldDecorator('subTitle', {
            initialValue: info.subTitle,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              }
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品品牌">
          {getFieldDecorator('brand', {
            initialValue: info.brand,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品介绍">
          {getFieldDecorator('desc', {
            initialValue: info.desc,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品货号">
          {getFieldDecorator('no', {
            initialValue: info.no,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品售价">
          {getFieldDecorator('price', {
            initialValue: info.price,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="市场价">
          {getFieldDecorator('marketPrice', {
            initialValue: info.marketPrice,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品库存">
          {getFieldDecorator('storage', {
            initialValue: info.storage,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="计量单位">
          {getFieldDecorator('unit', {
            initialValue: info.unit,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品重量">
          {getFieldDecorator('weight', {
            initialValue: info.weight,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="排序">
          {getFieldDecorator('sort', {
            initialValue: info.sort,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Form>
      )
    })
    
    const RenderForm1 = (({
    }) => {
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        }
      }
      const serviceOptions = [
        { label: '无忧退货', value: '1' },
        { label: '快速退款', value: '2' },
        { label: '免费包邮', value: '3' }
      ]
      return (
        <Form {...formItemLayout}>
        <Form.Item label="赠送积分">
          {getFieldDecorator('integral', {
            initialValue: promotion.integral,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="赠送成长值">
          {getFieldDecorator('growth', {
            initialValue: promotion.growth,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="积分购买限制">
          {getFieldDecorator('restrict', {
            initialValue: promotion.restrict,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="预告商品">
          {getFieldDecorator('isAdvance', {
            initialValue: promotion.isAdvance,
          })(<Switch/>)}
        </Form.Item>
        <Form.Item label="商品上架">
          {getFieldDecorator('isRacking', {
            initialValue: promotion.isRacking,
          })(<Switch />)}
        </Form.Item>
        <Form.Item label="商品推荐">
          新品{getFieldDecorator('recommend', {
            initialValue: promotion.recommend,
          })(<Switch />)}
          推荐{getFieldDecorator('recommend', {
            initialValue: promotion.recommend,
          })(<Switch />)}
        </Form.Item>
        <Form.Item label="服务保证">
          {getFieldDecorator('guarantee', {
            initialValue: promotion.guarantee,
          })(<Checkbox.Group options={serviceOptions}/>)}
        </Form.Item>
        <Form.Item label="详细页标题">
          {getFieldDecorator('detailTitle', {
            initialValue: promotion.detailTitle,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="详细页描述">
          {getFieldDecorator('detailDesc', {
            initialValue: promotion.detailDesc,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品关键字">
          {getFieldDecorator('keyword', {
            initialValue: promotion.keyword,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品备注">
          {getFieldDecorator('remark', {
            initialValue: promotion.remark,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="选择优惠方式">
          {getFieldDecorator('discounts', {
            initialValue: promotion.discounts,
          })(
            <Radio.Group buttonStyle="solid">
            <Radio.Button value="a">无优惠</Radio.Button>
            <Radio.Button value="b">特惠促销</Radio.Button>
            <Radio.Button value="c">会员价格</Radio.Button>
            <Radio.Button value="d">阶梯价格</Radio.Button>
            <Radio.Button value="e">满减价格</Radio.Button>
          </Radio.Group>)}
        </Form.Item>
      </Form>
      )
    })
    
    const RenderForm2 = (({
    }) => {
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        }
      }
      const serviceOptions = [
        { label: '无忧退货', value: '1' },
        { label: '快速退款', value: '2' },
        { label: '免费包邮', value: '3' }
      ]
      return (
        <Form {...formItemLayout}>
        <Form.Item label="属性类型">
          {getFieldDecorator('type', {
            initialValue: property.type,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品参数">
          {getFieldDecorator('params', {
            initialValue: property.params,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Form>
      )
    })
    
    const RenderForm3 = (({
    }) => {
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        }
      }
      const serviceOptions = [
        { label: '无忧退货', value: '1' },
        { label: '快速退款', value: '2' },
        { label: '免费包邮', value: '3' }
      ]
      return (
        <Form {...formItemLayout}>
        <Form.Item label="属性类型">
          {getFieldDecorator('type', {
            initialValue: relate.type,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="商品参数">
          {getFieldDecorator('params', {
            initialValue: relate.params,
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
      </Form>
      )
    })
    return (
      <div className="container">
        <Card style={{'width': '800px', 'margin': '0 auto'}}>
          <Steps current={this.state.step}>
            <Step title="1" description="填写商品信息" />
            <Step title="2" description="填写商品促销" />
            <Step title="3" description="填写商品属性" />
            <Step title="4" description="选择产品关联" />
          </Steps>
          <div className="container-form">
            {
              this.state.step === 0 && <RenderForm0 />
            }
            {
              this.state.step === 1 && <RenderForm1 />
            }
            {
              this.state.step === 2 && <RenderForm2 />
            }
            {
              this.state.step === 3 && <RenderForm3 />
            }
            <div className="operations">
              {/*  */}
              {this.renderOperatinos()}
            </div>
          </div>
        </Card>
      </div>
    );
  }
})