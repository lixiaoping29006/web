<template>
   <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <!-- 端站流量报表 -->
                <Card>
                    <div style="height: 500px">
                      <div style="border-bottom:1px solid rgb(232, 232, 232);height:40px">
                        <h2 style="float:left;padding-left:20px;font-size:16px;font-weight: bold;">
                          端站流量报表
                        </h2>
                      </div>
                      <div style="margin-top:15px">
                        <Tabs type="card">
                          <TabPane label="月报">
                            <div style="margin-left:40px;overflow: hidden">
                              <span style="float:left;height:32px;width:50px;line-height: 32px;">年度:</span>
                              <Row style="float:left">
                                  <Col span="12">
                                      <DatePicker type="year" placeholder="Select year" style="width: 200px" placement="bottom-start"></DatePicker>
                                  </Col>
                              </Row>
                              <Button type="primary" style="float:left;margin-left: 24px;">查询</Button>
                            </div>
                            <div style="margin-top:24px"> 
                               <Table width="1150" border :columns="columns2" :data="data3"></Table>
                            </div>
                            <div style="margin-top:24px;">
                              <Button type="default" style="float:left;">导出Excel</Button>
                              <Page :total="40" size="small" show-elevator show-sizer  style="float:right;"/>
                            </div>
                          </TabPane>
                          <TabPane label="日报">标签二的内容</TabPane>
                        </Tabs>
                      </div>
                    </div>
                </Card>

                <!-- 实时流量统计 -->
                <Card style="margin-top:24px">
                    <div style="height: 500px">
                      <div style="border-bottom:1px solid rgb(232, 232, 232);height:40px">
                        <h2 style="float:left;padding-left:20px;font-size:16px;font-weight: bold;">
                          实时流量报表
                        </h2>
                      </div>
                      <div style="margin-top:15px;overflow: hidden">
                        <div style="float:left">
                          <div style="margin-left:40px;overflow: hidden">
                              <span style="float:left;height:32px;width:70px;line-height: 32px;">站段名字:</span>
                              <div style="float:left;">
                                <Select v-model="model7" style="width:200px;">
                                <OptionGroup label="端站组001">
                                    <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </OptionGroup>
                                <OptionGroup label="端站组002">
                                    <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </OptionGroup>
                              </Select>
                              </div>
                             </div>
                        </div>

                        <div style="float:left">
                          <div style="margin-left:40px;overflow: hidden">
                              <span style="float:left;height:32px;width:70px;line-height: 32px;">时间段:</span>
                              <div style="float:left;">
                                <Select v-model="model7" style="width:200px;">
                                <OptionGroup label="端站组001">
                                    <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </OptionGroup>
                                <OptionGroup label="端站组002">
                                    <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </OptionGroup>
                              </Select>
                              </div>
                             </div>
                        </div>
                        <Button type="primary" style="float:left;margin-left: 24px;">查询</Button>
                      </div>
                      <div style="margin-top:24px;overflow: hidden">
                        <div style="float:left" > 
                          <span style="display: inline-block;width:10px;height:10px;background:#2d8cf0;border-radius: 100%;"></span>
                          <p style="display: inline-block;">渤海轮渡.玛珠.X5.223419</p>
                        </div>
                        <div style="float:right">
                          <Button  style="float:left;margin-left: 24px;">列表</Button>
                          <Button  style="float:left;">图表</Button>
                        </div>
                      </div>

                      <div style="margin-top:24px">
                        <Table stripe :columns="columns1" :data="data1"></Table>
                        <div style="margin-top:24px;">
                              <Button type="default" style="float:left;">导出Excel</Button>
                              <Page :total="40" size="small" show-elevator show-sizer  style="float:right;"/>
                            </div>
                      </div>
                    </div>
                </Card>

                <!-- 端站实时状态 -->
                <Card style="margin-top:24px">
                    <div style="height:500px">
                      <div style="border-bottom:1px solid rgb(232, 232, 232);height:40px">
                        <h2 style="float:left;padding-left:20px;font-size:16px;font-weight: bold;">
                          端站实时状态
                        </h2>
                      </div>
                      <Tabs type="card" style="margin-top:24px">
                          <TabPane label="全部">
                            <div style="margin-top:15px;overflow: hidden">
                              <div style="float:left">
                                <div style="margin-left:40px;overflow: hidden">
                                    <span style="float:left;height:32px;width:70px;line-height: 32px;">端站名称:</span>
                                    <div style="float:left;">
                                      <Select v-model="model7" style="width:200px;">
                                      <OptionGroup label="端站组001">
                                          <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                      </OptionGroup>
                                      <OptionGroup label="端站组002">
                                          <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                      </OptionGroup>
                                    </Select>
                                    </div>
                                  </div>
                              </div>

                              <div style="float:left">
                                <div style="margin-left:40px;overflow: hidden">
                                    <span style="float:left;height:32px;width:70px;line-height: 32px;">网络:</span>
                                    <div style="float:left;">
                                      <Select v-model="model7" style="width:200px;">
                                      <OptionGroup label="端站组001">
                                          <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                      </OptionGroup>
                                      <OptionGroup label="端站组002">
                                          <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                      </OptionGroup>
                                    </Select>
                                    </div>
                                  </div>
                              </div>
                              <Button type="primary" style="float:left;margin-left: 24px;">查询</Button>
                            </div>
                            <div style="margin-top:24px"> 
                               <Table width="1150" border :columns="columns3" :data="data3"></Table>
                            </div>
                            <div style="margin-top:24px;">
                              <Button type="default" style="float:left;">导出Excel</Button>
                              <Select v-model="model1" style="width:200px;float:left;margin-left: 10px;">
                                  <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                              </Select>
                              <Page :total="40" size="small" show-elevator show-sizer  style="float:right;"/>
                            </div>
                          </TabPane>
                          <TabPane label="正常">标签二的内容</TabPane>
                          <TabPane label="异常">标签二的内容</TabPane>
                        </Tabs>
                    </div>
                </Card>

                 <!-- 端站历史状态 -->
                 <Card style="margin-top:24px">
                    <div style="height:500px">
                      <div style="border-bottom:1px solid rgb(232, 232, 232);height:40px">
                        <h2 style="float:left;padding-left:20px;font-size:16px;font-weight: bold;">
                          端站历史状态
                        </h2>
                      </div>
                      <div style="margin-top:15px;overflow: hidden">
                              <div style="float:left">
                                <div style="margin-left:40px;overflow: hidden">
                                    <span style="float:left;height:32px;width:70px;line-height: 32px;">端站名称:</span>
                                    <div style="float:left;">
                                      <Select v-model="model7" style="width:200px;">
                                      <OptionGroup label="端站组001">
                                          <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                      </OptionGroup>
                                      <OptionGroup label="端站组002">
                                          <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                      </OptionGroup>
                                    </Select>
                                    </div>
                                  </div>
                              </div>

                              <div style="float:left">
                                <div style="margin-left:40px;">
                                    <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
                                </div>
                              </div>
                              <Button type="primary" style="float:left;margin-left: 24px;">查询</Button>
                        </div>
                        <div style="margin-top:24px;overflow: hidden">
                          <div style="float:left" > 
                            <span style="display: inline-block;width:10px;height:10px;background:#2d8cf0;border-radius: 100%;"></span>
                            <p style="display: inline-block;">渤海轮渡.玛珠.X5.223419</p>
                          </div>
                          <div style="float:right">
                            <Button  style="float:left;margin-left: 24px;">列表</Button>
                            <Button  style="float:left;">图表</Button>
                          </div>
                        </div>
                        <div style="margin-top:0;">
                          <div id="myLineCharts" style="width:100%;height:400px"></div>
                        </div>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld',
       columns2: [
                    {
                        title: '端站组',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '一月',
                        key: 'January',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '二月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '三月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '四月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '五月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '六月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '七月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '八月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '九月',
                        key: 'February',
                         align: 'center',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '2019',
                        key: 'num',
                        fixed: 'right',
                        width: 300,
                        children: [
                          {
                            title: '接收(MB)',
                            key: 'reception',
                            align: 'center',
                            fixed: 'right',
                            width: 100,
                          },
                          {
                            title: '发送(MB)',
                            key: 'send',
                            align: 'center',
                            fixed: 'right',
                            width: 100,
                          },
                          {
                            title: '合计(MB)',
                            key: 'summation',
                            align: 'center',
                            fixed: 'right',
                            width: 100,
                          }    
                        ]
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small',
                                    }
                                }, '查看'),
                            ]);
                        }
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
      ],
      cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                cityList1: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    }
                ],
                cityList2: [
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model7: '',
                model1: '',
                 columns1: [
                    {
                        title: '端站接收流量',
                        key: 'name'
                    },
                    {
                        title: '端站发送流量',
                        key: 'age'
                    },
                    {
                        title: '端站流量',
                        key: 'address'
                    },
                    {
                        title: '跟新时间',
                        key: 'last'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        last: '22333'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                        last: '22333'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02',
                        last: '22333'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04',
                        last: '22333'
                    }
                ],
       columns3: [
                    {
                        title: '端站组',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '端站名称',
                        key: 'name',
                        width: 200,
                        fixed: 'left'
                    },
                    {
                        title: '网络',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '状态',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Warning',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: 'Alarms',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '经度(E:+/W:-)',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '纬度(N:+/S:-)',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '状态更新时间',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '上行速率',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '下行速率',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '往返延迟',
                        key: 'name',
                        width: 100,
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
      ],
    }
  },
  mounted() {
    this.myLineCharts()
  },
  methods: {
    myLineCharts() {
      var data = [];
      var dataCount = 10;
      var startTime = +new Date();
      var categories = ['categoryA', 'categoryB', 'categoryC'];
      var types = [
          {name: 'JS Heap', color: '#7b9ce1'},
          {name: 'Documents', color: '#bd6d6c'},
          {name: 'Nodes', color: '#75d874'},
          {name: 'Listeners', color: '#e0bc78'},
          {name: 'GPU Memory', color: '#dc77dc'},
          {name: 'GPU', color: '#72b362'}
      ];

      // Generate mock data
      echarts.util.each(categories, function (category, index) {
          var baseTime = startTime;
          for (var i = 0; i < dataCount; i++) {
              var typeItem = types[Math.round(Math.random() * (types.length - 1))];
              var duration = Math.round(Math.random() * 10000);
              data.push({
                  name: typeItem.name,
                  value: [
                      index,
                      baseTime,
                      baseTime += duration,
                      duration
                  ],
                  itemStyle: {
                      normal: {
                          color: typeItem.color
                      }
                  }
              });
              baseTime += Math.round(Math.random() * 2000);
          }
      });

      function renderItem(params, api) {
          var categoryIndex = api.value(0);
          var start = api.coord([api.value(1), categoryIndex]);
          var end = api.coord([api.value(2), categoryIndex]);
          var height = api.size([0, 1])[1] * 0.6;

          var rectShape = echarts.graphic.clipRectByRect({
              x: start[0],
              y: start[1] - height / 2,
              width: end[0] - start[0],
              height: height
          }, {
              x: params.coordSys.x,
              y: params.coordSys.y,
              width: params.coordSys.width,
              height: params.coordSys.height
          });

          return rectShape && {
              type: 'rect',
              shape: rectShape,
              style: api.style()
          };
      }
       this.myLineCharts = echarts.init(document.getElementById("myLineCharts"));
      var option = {
        tooltip: {
            formatter: function (params) {
                return params.marker + params.name + ': ' + params.value[3] + ' ms';
            }
        },
        title: {
            text: 'Profile',
            left: 'center'
        },
        dataZoom: [{
            type: 'slider',
            filterMode: 'weakFilter',
            showDataShadow: false,
            top: 320,
            height: 10,
            borderColor: 'transparent',
            backgroundColor: '#e2e2e2',
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
            handleSize: 20,
            handleStyle: {
                shadowBlur: 6,
                shadowOffsetX: 1,
                shadowOffsetY: 2,
                shadowColor: '#aaa'
            },
            labelFormatter: ''
        }, {
            type: 'inside',
            filterMode: 'weakFilter'
        }],
        grid: {
            height:220
        },
        xAxis: {
            min: startTime,
            scale: true,
            axisLabel: {
                formatter: function (val) {
                    return Math.max(0, val - startTime) + ' ms';
                }
            }
        },
        yAxis: {
            data: categories
        },
        series: [{
            type: 'custom',
            renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            encode: {
                x: [1, 2],
                y: 0
            },
            data: data
        }]
    };
     this.myLineCharts.setOption(option);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
