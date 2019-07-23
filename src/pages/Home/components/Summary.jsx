import { Card } from 'antd'
import style from './Summary.less'
import Item from 'antd/lib/list/Item';

const dataOptinos = [
  {
    title: '总销售额',
    value: '￥ 126, 560'
  },
  {
    title: '访问量',
    value: '8, 846'
  },
  {
    title: '支付笔数',
    value: '6, 560'
  },
  {
    title: '运营活动效果',
    value: '78%'
  }
]

const Summary = () => {
  return (
    <div className={style.summary}>
      {
        dataOptinos.map(item => {
          return (
            <Card className={style.card} key={item.title}>
              <p className={style.p}>{item.title}</p>
              <h2 className={style.h2}>{item.value}</h2>
              <div></div>
            </Card>
          )
        })
      }
    </div>
  )
}

export default Summary