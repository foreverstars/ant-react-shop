import { Card, Tabs } from 'antd'
import { Chart,  Axis, Tooltip, Geom } from 'bizcharts'

const { TabPane } = Tabs

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  })
}

const cols = {
  sales: {
    tickInterval: 20
  }
}

const Statistic = () => {
  return (
    <Card style={{marginTop: '20px'}}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="销售额" key="1">
          <Chart height={400} data={salesData} forceFit>
            <Axis name="x" />
            <Axis name="y" />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="interval" position="x*y" />
        </Chart>
        </TabPane>
        <TabPane tab="访问量" key="2">
          <Chart height={400} data={salesData} forceFit>
              <Axis name="x" />
              <Axis name="y" />
              <Tooltip
                crosshairs={{
                  type: "y"
                }}
              />
              <Geom type="line" position="x*y" size={2} />
              <Geom
                type="point"
                position="x*y"
                size={4}
                shape={"circle"}
                style={{
                  stroke: "#fff",
                  lineWidth: 1
                }}
              />
          </Chart>
        </TabPane>
      </Tabs>      
    </Card>
  )
}


export default Statistic